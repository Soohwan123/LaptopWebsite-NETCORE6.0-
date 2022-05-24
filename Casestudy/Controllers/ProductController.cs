using Casestudy.DAL;
using Casestudy.DAL.DAO;
using Casestudy.DAL.DomainClasses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Casestudy.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly AppDbContext _db;
        public ProductController(AppDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        [Route("{braid}")]
        public async Task<ActionResult<List<Product>>> Index(int braid)
        {
            ProductDAO dao = new(_db);
            List<Product> productsForBrand = await dao.GetAllByBrand(braid);
            return productsForBrand;
        }
    }
}
