using System;
using System.Collections;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Back.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
namespace Back.Controllers
{
    // [EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]
    [ApiController]

    public class ProductController : Controller
    {
        private readonly ILogger<ProductController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public ProductController(ILogger<ProductController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }

        [Route("{loai}/{hang}/{dong}/{sanpham}")]
        public async Task<IActionResult> ProductInfo(string loai, string hang, string dong, string sanpham)
        {

            int maloai = 0;
            switch (loai)
            {
                case "mobile":
                    maloai = 1;
                    break;
                case "laptop":
                    maloai = 2;
                    break;
                default:
                    break;
            }
            int productid = await lavenderContext.Sanpham
                .Where(s => s.Tensanpham.Contains(sanpham))
                .Where(s => s.Tensanpham.Contains(dong))
                .Select(s => s.Masanpham).FirstOrDefaultAsync();

            int trademarkid = await lavenderContext.Thuonghieu.Where(s => s.Tenthuonghieu.Contains(hang)).Select(s => s.Mathuonghieu).FirstOrDefaultAsync();
            var product = await (from p in lavenderContext.Sanpham
                           where
                           p.Maloai==maloai &&
                           p.Mathuonghieu==trademarkid &&
                           p.Masanpham==productid
                           select p).FirstOrDefaultAsync();
            int fCount = 0;
            if (product!=null)
            {
                fCount = Directory.GetFiles($"{_env.ContentRootPath}/wwwroot/{loai}/{hang}/{dong}/{sanpham}", "*", SearchOption.TopDirectoryOnly).Length;
                return StatusCode(200, Json(product, new { sohinhanh = fCount }));
            }
            Console.WriteLine("product" + product);
            return StatusCode(404);

        }

        [Route("/tim-sanpham-theo-sohoadon")]
        [HttpGet]
        public async Task<IActionResult> FindProductByBillId(int sohoadon)
        {
            var imei = await (from c in lavenderContext.Chitiethoadon
                              where c.Sohoadon == sohoadon
                              select c.Imei).FirstOrDefaultAsync();
            var productid = await (from c in lavenderContext.Chitietsanpham
                                   where c.Imei == imei
                                   select c.Masanpham).FirstOrDefaultAsync();
            var product = await (from p in lavenderContext.Sanpham
                                 where p.Masanpham == productid
                                 select p).FirstOrDefaultAsync();
            return StatusCode(200, Json(product));
        }
    }

}



