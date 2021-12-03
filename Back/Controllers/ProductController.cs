using System;
using System.Collections;
using System.Drawing;
using System.Drawing.Imaging;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Back.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
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

        [Route("/{loai}/{hang}/{dong}/{sanpham}")]
        public async Task<IActionResult> ProductInfo(string loai, string hang, string dong, string sanpham, string dungluong, string mausac)
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
            int productid = (int)await lavenderContext.Sanpham
                .Where(s => s.Tensanpham.Contains(sanpham))
                .Where(s => s.Tensanpham.Contains(dong))
                .Select(s => s.Masanpham).FirstOrDefaultAsync();

            int trademarkid = await lavenderContext.Thuonghieu.Where(s => s.Tenthuonghieu.Contains(hang)).Select(s => s.Mathuonghieu).FirstOrDefaultAsync();
            var product = await (from p in lavenderContext.Sanpham
                                 where
                                 p.Maloai == maloai &&
                                 p.Mathuonghieu == trademarkid &&
                                 p.Masanpham == productid
                                 select p).FirstOrDefaultAsync();
            int fCount = 0;
            if (product != null)
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

        [Route("/tim-sanpham-theo-masanpham")]
        [HttpGet]
        public async Task<IActionResult> FindProductbyId(int masanpham)
        {
            var sanpham = await lavenderContext.Sanpham.SingleOrDefaultAsync(x => x.Masanpham == masanpham);
            if (sanpham == null) return StatusCode(404);
            return StatusCode(200, Json(sanpham));
        }

        [Route("/tim-sanpham-theo-tenthuonghieu")]
        [HttpGet]
        public async Task<IActionResult> TimsanphamTheoThuonghieu(string tenthuonghieu)
        {
            var thuonghieu = await lavenderContext.Thuonghieu.SingleOrDefaultAsync(x => x.Tenthuonghieu.ToLower().Equals(tenthuonghieu));
            if (thuonghieu == null) return StatusCode(404);
            var sanphams = await (from s in lavenderContext.Sanpham
                                  where s.Mathuonghieu == thuonghieu.Mathuonghieu
                                  select s).ToListAsync();
            return StatusCode(200, Json(sanphams));
        }

        [Route("/them-sanpham")]
        [HttpPost]
        public async Task<IActionResult> AddProduct([FromForm] string tensanpham, [FromForm] int maloai,
            [FromForm] int mathuonghieu, [FromForm] int soluongton, [FromForm] string mota, [FromForm] IFormFile image, [FromForm] string thoidiemramat, [FromForm] float dongia)
        {
            Sanpham s = new Sanpham();
            s.Tensanpham = tensanpham;
            s.Maloai = maloai;
            s.Mathuonghieu = mathuonghieu;
            s.Soluongton = soluongton;
            s.Mota = mota;
            s.Thoidiemramat = DateTime.Parse(thoidiemramat).ToLocalTime();
            s.Dongia = dongia;

            string loai = "";
            switch (maloai)
            {
                case 1:
                    loai = "mobile";
                    break;
                case 2:
                    loai = "laptop";
                    break;
                default:
                    break;
            }

            string hang = await (from t in lavenderContext.Thuonghieu
                                 where t.Mathuonghieu == mathuonghieu
                                 select t.Tenthuonghieu).FirstOrDefaultAsync();
            string[] tokens = tensanpham.Split(' ');
            string dong = tokens[0];
            string sanpham = tokens[1];
            string path = $"/{loai}/{hang}/{dong}/{sanpham}";

            s.Image = path;

            await lavenderContext.AddAsync(s);
            await lavenderContext.SaveChangesAsync();

            if (image == null || image.Length==0) return StatusCode(200, Json(s));

            string NewDir = _env.ContentRootPath + "/wwwroot" + path;

            if (!Directory.Exists(NewDir))
            {
                // Create the directory.
                Directory.CreateDirectory(NewDir);
            }
            using (var memoryStream = new MemoryStream())
            {
                await image.CopyToAsync(memoryStream);
                using (var img = Image.FromStream(memoryStream))
                {
                    // TODO: ResizeImage(img, 100, 100);
                    img.Save(_env.ContentRootPath + "/wwwroot" + path + "/0.Jpeg", ImageFormat.Jpeg);
                }
            }
            return StatusCode(200, Json(s));
        }

        [Route("/sua-sanpham")]
        [HttpPost]
        public async Task<IActionResult> EditProduct([FromForm] int masanpham, [FromForm] string tensanpham, [FromForm] int maloai,
            [FromForm] int mathuonghieu, [FromForm] int soluongton, [FromForm] string mota, [FromForm] IFormFile image, [FromForm] string thoidiemramat, [FromForm] float dongia)
        {
            string loai = "";
            switch (maloai)
            {
                case 1:
                    loai = "mobile";
                    break;
                case 2:
                    loai = "laptop";
                    break;
                default:
                    break;
            }

            string hang = await (from t in lavenderContext.Thuonghieu
                                 where t.Mathuonghieu == mathuonghieu
                                 select t.Tenthuonghieu).FirstOrDefaultAsync();
            string[] tokens = tensanpham.Split(' ');
            string dong = tokens[0];
            string sanpham = tokens[1];
            string path = $"/{loai}/{hang}/{dong}/{sanpham}";

            var s = await (from p in lavenderContext.Sanpham
                           where p.Masanpham == masanpham
                           select p).FirstOrDefaultAsync();
            s.Tensanpham = tensanpham;
            s.Maloai = maloai;
            s.Mathuonghieu = mathuonghieu;
            s.Soluongton = soluongton;
            s.Mota = mota;
            s.Thoidiemramat = DateTime.Parse(thoidiemramat).ToLocalTime();
            s.Dongia = dongia;
            s.Image = path;

            if (image == null || image.Length == 0) return StatusCode(200, Json(s));

            await lavenderContext.SaveChangesAsync();

            string NewDir = _env.ContentRootPath + "/wwwroot" + path;

            if (!Directory.Exists(NewDir))
            {
                // Create the directory.
                Directory.CreateDirectory(NewDir);
            }
            using (var memoryStream = new MemoryStream())
            {
                await image.CopyToAsync(memoryStream);
                using (var img = Image.FromStream(memoryStream))
                {
                    // TODO: ResizeImage(img, 100, 100);
                    img.Save(_env.ContentRootPath + "/wwwroot" + path + "/0.Jpeg", ImageFormat.Jpeg);
                }
            }
            return StatusCode(200, Json(s));
        }

        [Route("/tatca-dienthoai")]
        [HttpGet]
        public async Task<IActionResult> AllMobileProduct()
        {
            var listproduct = await (from s in lavenderContext.Sanpham
                                     where s.Maloai == 1
                                     orderby s.Mathuonghieu ascending
                                     select s).ToListAsync();
            return StatusCode(200, Json(listproduct));
        }

        [Route("/tatca-laptop")]
        [HttpGet]
        public async Task<IActionResult> AllLaptopProduct()
        {
            var listproduct = await (from s in lavenderContext.Sanpham
                                     where s.Maloai == 2
                                     orderby s.Mathuonghieu ascending
                                     select s).ToListAsync();
            return StatusCode(200, Json(listproduct));
        }

        [Route("/tim-sanpham")]
        [HttpGet]
        public async Task<IActionResult> FindProduct(string timkiem)
        {
            if (String.IsNullOrEmpty(timkiem))
            {
                var sanphamlist = await (from s in lavenderContext.Sanpham
                                         select s).ToListAsync();
                return StatusCode(200, Json(sanphamlist));
            }
            else
            {
                var sanphamlist = await (from s in lavenderContext.Sanpham
                                         where s.Tensanpham.Contains(timkiem)
                                         select s).ToListAsync();
                return StatusCode(200, Json(sanphamlist));
            }
            
        }

        [Route("/muoi-sanpham-moinhat")]
        [HttpGet]
        public async Task<IActionResult> TenNewProduct()
        {
            var list = await (from x in lavenderContext.Sanpham
                              orderby x.Thoidiemramat descending
                              select x).ToListAsync();
            return StatusCode(200, Json(list));
        }
    }

}



