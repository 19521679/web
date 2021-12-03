using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Threading.Tasks;
using Back.Common;
using Back.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using Newtonsoft.Json.Linq;

namespace Back.Controllers
{
    
    // [EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]
    [ApiController]

    public class DetailcartController : Controller
    {
        private readonly ILogger<DetailcartController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public DetailcartController(ILogger<DetailcartController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }
        /* GET  /chitietgiohang-bang-magiohang?magiohang=1
         * POST 
         * 
         * {
         *  magiohang: 1,
         *  tengiohang: a
         *
         * }
         * A
         * */
        [Route("/chitietgiohang-bang-magiohang")]
        [HttpGet]
        public async Task<IActionResult> LoadDetailCartByCartId([FromQuery]int magiohang)
        {
            var chitietgiohangs = await (from c in lavenderContext.Chitietgiohang
                                         where c.Magiohang == magiohang
                                         select c).ToListAsync();
            if (chitietgiohangs == null || chitietgiohangs.Count() == 0) return StatusCode(200);
            return StatusCode(200, Json(chitietgiohangs));
        }

        [Route("dat-soluong-cho-chitietgiohang")]
        [HttpPost]
        public async Task<IActionResult> SetQuantityForDetailCart(JsonElement json)
        {
            var chitietgiohang = await lavenderContext.Chitietgiohang.SingleOrDefaultAsync(x => (x.Magiohang == int.Parse(json.GetString("magiohang"))
            && x.Masanpham == int.Parse(json.GetString("masanpham"))
            && x.Dungluong==json.GetString("dungluong")
            && x.Mausac==json.GetString("mausac")));
            if (chitietgiohang == null) return StatusCode(404);
            chitietgiohang.Soluong = int.Parse(json.GetString("soluong"));
            await lavenderContext.SaveChangesAsync();
            return StatusCode(200);
        }

        [Route("/xoa-chitietgiohang")]
        [HttpDelete]
        public async Task<IActionResult> deleteDetailCart(int magiohang, int masanpham)
        {
            var chitietgiohang = await (from c in lavenderContext.Chitietgiohang
                                        where c.Magiohang == magiohang
                                        && c.Masanpham == masanpham
                                        select c).FirstOrDefaultAsync();

            if (chitietgiohang == null) return StatusCode(404);
            lavenderContext.Remove(chitietgiohang);
            await lavenderContext.SaveChangesAsync();
            return StatusCode(200);
        }

        [Route("/xoa-tatca-chitietgiohang")]
        [HttpDelete]
        public async Task<IActionResult> deleteAllDetailCart(int magiohang)
        {
            var chitietgiohangs = await (from c in lavenderContext.Chitietgiohang
                                        where c.Magiohang == magiohang
                                        select c).ToListAsync();
            if (chitietgiohangs == null || chitietgiohangs.Count()==0) return StatusCode(404);
            lavenderContext.RemoveRange(chitietgiohangs);
            await lavenderContext.SaveChangesAsync();
            return StatusCode(200);
        }
    }

}



