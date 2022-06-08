using Casestudy.DAL.DomainClasses;
using Casestudy.Helpers;
using Microsoft.EntityFrameworkCore;

namespace Casestudy.DAL.DAO
{
    public class OrderDAO
    {
        private readonly AppDbContext _db;
        public OrderDAO(AppDbContext ctx)
        {
            _db = ctx;
        }
        public async Task<int> AddOrder(int customerid, OrderSelectionHelper[] selections)
        {
            int orderId = -1;
            // we need a transaction as multiple entities involved
            using (var _trans = await _db.Database.BeginTransactionAsync())
            {
                try
                {
                    Order order = new();
                    order.CustomerId = customerid;
                    order.OrderDate = System.DateTime.Now;
                    order.OrderAmount = 0.0M;
                    // calculate the totals and then add the order row to the table
                    foreach (OrderSelectionHelper selection in selections)
                    {
                        order.OrderAmount += selection.Item!.MSRP * selection.Qty;
                    }

                    await _db.Orders!.AddAsync(order);
                    await _db.SaveChangesAsync();
                    // then add each item to the orderitems table
                    foreach (OrderSelectionHelper selection in selections)
                    {
                        OrderLineItem oItem = new();
                        oItem.Product = selection.Item!;
                        oItem.ProductId = selection.Item!.Id;
                        oItem.SellingPrice = selection.Item!.MSRP * (decimal)selection.Qty;
                        oItem.OrderId = order.Id;
                        if (selection.Qty <= oItem.Product!.QtyOnHand)
                        {
                            oItem.Product!.QtyOnHand -= selection.Qty;
                            oItem.QtySold = selection.Qty;
                            oItem.QtyBackOrdered = 0;
                            oItem.QtyOrdered = selection.Qty;
                        }
                        else
                        {
                            oItem.QtySold = oItem.Product!.QtyOnHand;
                            oItem.Product!.QtyOnBackOrder += (selection.Qty - oItem.Product!.QtyOnHand);
                            oItem.QtyBackOrdered += (selection.Qty - oItem.Product!.QtyOnHand);
                            oItem.Product!.QtyOnHand = 0;
                            oItem.QtyOrdered = selection.Qty;
                        }

                        await _db.OrderLineItems!.AddAsync(oItem);
                        _db.Products!.Update(oItem.Product!);
                        await _db.SaveChangesAsync();
                    }
                    // test trans by uncommenting out these 3 lines
                    //int x = 1;
                    //int y = 0;
                    //x = x / y;
                    await _trans.CommitAsync();
                    orderId = order.Id;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await _trans.RollbackAsync();
                }
            }
            return orderId;
        }

        public async Task<List<Order>> GetAll(int id)
        {
            return await _db.Orders!.Where(order => order.CustomerId == id).ToListAsync<Order>();
        }

        public async Task<List<OrderDetailsHelper>> GetOrderDetails(int oid, string email)
        {
            Customer? customer = _db.Customers!.FirstOrDefault(customer => customer.Email == email);
            Order? order = _db.Orders!.FirstOrDefault(order => order.Id == oid);
            List<OrderDetailsHelper> allDetails = new();
            // LINQ way of doing INNER JOINS
            var results = from o in _db.Orders
                          join oli in _db.OrderLineItems! on o.Id equals oli.OrderId
                          join p in _db.Products! on oli.ProductId equals p.Id
                          where (o.CustomerId == customer!.Id && o.Id == oid)
                          select new OrderDetailsHelper
                          {
                              OrderId = o.Id,
                              ProductId = oli.ProductId,
                              CustomerId = customer!.Id,
                              ProductName = p.ProductName,
                              OrderLineItemId = oli.Id,
                              QtyOrdered = oli.QtyOrdered,
                              QtySold = oli.QtySold,
                              QtyBackOrdered = oli.QtyBackOrdered,
                              SellingPrice = p.MSRP * oli.QtyOrdered,                   
                              DateCreated = order!.OrderDate.ToString("yyyy/MM/dd - hh:mm tt")
                          };
            allDetails = await results.ToListAsync();
            return allDetails;
        }
    }


}