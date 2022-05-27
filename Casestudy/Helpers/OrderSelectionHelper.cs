using Casestudy.DAL.DomainClasses;
namespace Casestudy.Helpers
{
    public class OrderSelectionHelper
    {
        public string? Id { get; set; }
        public int Qty { get; set; }
        public Product? Item { get; set; }
    }
}