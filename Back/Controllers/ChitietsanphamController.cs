using System;
using System.Collections.Generic;
using System.Data;

using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using Back.Models;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Back.Controllers
{

    // [EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]
    [ApiController]

    public class ChitietsanphamController : Controller
    {
        private readonly ILogger<ChitietsanphamController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public ChitietsanphamController(ILogger<ChitietsanphamController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }

        [Route("{loai}/{hang}/{dong}/{sanpham}/dungluong")]
        [HttpGet]
        public async Task<IActionResult> Sokieudungluong(string loai, string hang, string dong, string sanpham, string mausac)
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

            int thuonghieuid = await (from t in lavenderContext.Thuonghieu
                                      where t.Tenthuonghieu.Equals(hang)
                                      select t.Mathuonghieu).FirstOrDefaultAsync();
            if (thuonghieuid == 0) return StatusCode(404);

            var sanphamtemp = await lavenderContext.Sanpham.SingleOrDefaultAsync(x => x.Maloai == maloai && x.Tensanpham.Contains(dong) && x.Tensanpham.Contains(sanpham) && x.Mathuonghieu == thuonghieuid);
            if (sanphamtemp == null) return StatusCode(404);
            var chitietsanphams = await (from c in lavenderContext.Chitietsanpham
                                         where c.Masanpham == sanphamtemp.Masanpham
                                         && mausac.Equals("-1") ? true : c.Mausac.Equals(mausac)
                                         select c).ToListAsync();
            if (chitietsanphams.Count() == 0) return StatusCode(404);

            List<Chitietsanpham> listsanphamtheodungluong = new List<Chitietsanpham>();
            List<dynamic> dungluong = new List<dynamic>();
            foreach (var i in chitietsanphams)
            {
                var timduoccaimoinaodo = true;
                foreach (var j in listsanphamtheodungluong)
                {
                    if (j.Dungluong.Equals(i.Dungluong))
                    {
                        timduoccaimoinaodo = false;
                        break;
                    }
                }

                if (timduoccaimoinaodo == true)
                {
                    dungluong.Add(new { dungluong = i.Dungluong });
                }

            }

            return StatusCode(200, Json(dungluong));
        }

        [Route("{loai}/{hang}/{dong}/{sanpham}/mausac")]
        [HttpGet]
        public async Task<IActionResult> Sokieumausac(string loai, string hang, string dong, string sanpham, string dungluong)
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

            int thuonghieuid = await (from t in lavenderContext.Thuonghieu
                                      where t.Tenthuonghieu.Equals(hang)
                                      select t.Mathuonghieu).FirstOrDefaultAsync();
            if (thuonghieuid == 0) return StatusCode(404);

            var sanphamtemp = await lavenderContext.Sanpham.SingleOrDefaultAsync(x => x.Maloai == maloai && x.Tensanpham.Contains(dong) && x.Tensanpham.Contains(sanpham) && x.Mathuonghieu == thuonghieuid);
            if (sanphamtemp == null) return StatusCode(404);

            var chitietsanphams = await (from c in lavenderContext.Chitietsanpham
                                         where c.Masanpham == sanphamtemp.Masanpham
                                         && dungluong.Equals("-1") ? true : c.Dungluong.Equals(dungluong)
                                         select c).ToListAsync();

            if (chitietsanphams.Count() == 0) return StatusCode(404);

            List<Chitietsanpham> listsanphamtheomausac = new List<Chitietsanpham>();
            List<dynamic> mausac = new List<dynamic>();
            foreach (var i in chitietsanphams)
            {
                var timduoccaimoinaodo = true;
                foreach (var j in listsanphamtheomausac)
                {
                    if (j.Mausac.Equals(i.Mausac))
                    {
                        timduoccaimoinaodo = false;
                        break;
                    }
                }

                if (timduoccaimoinaodo == true)
                {
                    mausac.Add(new { mausac = i.Mausac, image = i.Image });
                }

            }

            return StatusCode(200, Json(mausac));
        }

        [Route("/{loai}/{hang}/{dong}/{sanpham}/xemgia")]
        [HttpGet]
        public async Task<IActionResult> XemGia(string loai, string hang, string dong, string sanpham, string dungluong, string mausac)
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

            int thuonghieuid = await (from t in lavenderContext.Thuonghieu
                                      where t.Tenthuonghieu.Equals(hang)
                                      select t.Mathuonghieu).FirstOrDefaultAsync();
            if (thuonghieuid == 0) return StatusCode(404);


            var sanphamtemp = await lavenderContext.Sanpham.SingleOrDefaultAsync(x => x.Maloai == maloai && x.Tensanpham.Contains(dong) && x.Tensanpham.Contains(sanpham) && x.Mathuonghieu == thuonghieuid);
            if (sanphamtemp == null) return StatusCode(404);

            float giamoi = 0;

            giamoi = await (from c in lavenderContext.Chitietsanpham
                            where c.Masanpham == sanphamtemp.Masanpham
                            && dungluong.Equals("-1")?true:c.Dungluong.Equals(dungluong)
                            && mausac.Equals("-1")?true:c.Mausac.Equals(mausac)
                            orderby c.Giamoi ascending
                            select c.Giamoi).FirstOrDefaultAsync();

            if (giamoi == 0) return StatusCode(404);
            return StatusCode(200, Json(giamoi));
        }

        [Route("xem-gia-theo-masanpham")]
        [HttpGet]
        public async Task<IActionResult> XemGiaTheoMasanpham(int masanpham)
        {
            float giamoi = 0;

            giamoi = await (from c in lavenderContext.Chitietsanpham
                            where c.Masanpham == masanpham
                            orderby c.Giamoi ascending
                            select c.Giamoi).FirstOrDefaultAsync();

            return StatusCode(200, Json(giamoi));
        }

        [Route("/xemgia-theo-dungluong-mausac-masanpham")]
        [HttpGet]
        public async Task<IActionResult> XemGiaTheoDungluongMausacMasanpham(int masanpham, string dungluong, string mausac)
        {
            var chitietsanpham = await lavenderContext.Chitietsanpham.SingleOrDefaultAsync(x => x.Masanpham == masanpham
            && x.Dungluong.ToLower().Equals(dungluong.ToLower())
            && x.Mausac.Equals(mausac));
            if (chitietsanpham == null) return StatusCode(200, Json(new { giamoi = 0}));
            return StatusCode(200, Json(chitietsanpham.Giamoi));
        }

        [Route("/xoa-sanpham")]
        [HttpGet]
        public async Task<IActionResult> DeleteProduct(int masanpham)
        {
            var product = await (from s in lavenderContext.Sanpham
                                 where s.Masanpham == masanpham
                                 select s).FirstOrDefaultAsync();

            var detailProducts = await (from c in lavenderContext.Chitietsanpham
                                       where c.Masanpham == masanpham
                                       select c).ToListAsync();
            lavenderContext.RemoveRange(detailProducts);
            await lavenderContext.SaveChangesAsync();
            lavenderContext.Remove(product);
            await lavenderContext.SaveChangesAsync();
            return StatusCode(200, Json(masanpham));
        }
    }

}



