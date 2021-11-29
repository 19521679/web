using System;
using System.Collections;
using System.Collections.Generic;
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

    public class KhuyenmaiController : Controller
    {
        private readonly ILogger<KhuyenmaiController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public KhuyenmaiController(ILogger<KhuyenmaiController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }

        [Route("/khuyenmaicuatoi")]
        [HttpGet]
        public async Task<IActionResult> KhuyenmaiCuaToi(int makhachhang)
        {
            var khuyenmais = await (from k in lavenderContext.Khuyenmaicuatoi
                                    where k.Makhachhang == makhachhang
                                    select k).ToListAsync();
            return StatusCode(200, Json(khuyenmais));
        }

        [Route("/chitietkhuyenmaicuatoi")]
        [HttpGet]
        public async Task<IActionResult> ChitietKhuyenmaiCuaToi(int makhachhang)
        {
            var khuyenmais = await (from k in lavenderContext.Khuyenmaicuatoi
                                    where k.Makhachhang == makhachhang
                                    select k).ToListAsync();

            List<Khuyenmai> listkhuyenmai = new List<Khuyenmai>();
            foreach (var i in khuyenmais)
            {
                var khuyenmai = await lavenderContext.Khuyenmai.SingleAsync(x => x.Makhuyenmai == i.Makhuyenmai);
                if (khuyenmai != null) listkhuyenmai.Add(khuyenmai);
            }
            
            return StatusCode(200, Json(listkhuyenmai));
        }


        [Route("/khuyenmaicuatoi")]
        [HttpDelete]
        public async Task<IActionResult> XoaKhuyenmaiCuatoi(int makhachhang, int makhuyenmai)
        {
            var khuyenmaicuatoi = await lavenderContext.Khuyenmaicuatoi.SingleOrDefaultAsync(x => x.Makhachhang == makhachhang && x.Makhuyenmai == makhuyenmai);
            if (khuyenmaicuatoi == null) return StatusCode(404);
             lavenderContext.Remove(khuyenmaicuatoi);
            await lavenderContext.SaveChangesAsync();
            return StatusCode(200);
        }
    }

}



