using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Back.Common;
using Back.Models;
using Back.Models.Account;
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

    public class CartController : Controller
    {
        private readonly ILogger<CartController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public CartController(ILogger<CartController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }
        [Route("/add-to-cart")]
        [HttpPost]
        public async Task<IActionResult> AddToCart(JsonElement json)
        {
            Giohang giohang = await (from g in lavenderContext.Giohang
                           where g.Makhachhang == int.Parse(json.GetString("makhachhang"))
                           select g).FirstOrDefaultAsync();
            Khachhang khachhang = await (from k in lavenderContext.Khachhang
                                         where k.Makhachhang == int.Parse(json.GetString("makhachhang"))
                                         select k).FirstOrDefaultAsync();
            if (giohang == null)
            {
                giohang = new Giohang();
                giohang.Makhachhang = 1;
                giohang.MakhachhangNavigation = khachhang;
                await lavenderContext.Giohang.AddAsync(giohang);
                await lavenderContext.SaveChangesAsync();
                giohang = await (from g in lavenderContext.Giohang
                                 where g.Makhachhang == int.Parse(json.GetString("makhachhang"))
                                 select g).FirstOrDefaultAsync();
            }

            Chitietgiohang chitietgiohang = await (from c in lavenderContext.Chitietgiohang
                                                    where c.Magiohang == giohang.Magiohang
                                                    && c.Masanpham == int.Parse(json.GetString("masanpham"))
                                                    && c.Dungluong==json.GetString("dungluong")
                                                    && c.Mausac == json.GetString("mausac")
                                                    select c).FirstOrDefaultAsync();
            if (chitietgiohang== null)
            {
                chitietgiohang = new Chitietgiohang();
                chitietgiohang.Magiohang = giohang.Magiohang;
                chitietgiohang.Soluong = 1;
                chitietgiohang.Masanpham = int.Parse(json.GetString("masanpham"));
                chitietgiohang.Dungluong = json.GetString("dungluong");
                chitietgiohang.Mausac = json.GetString("mausac");
                await lavenderContext.Chitietgiohang.AddAsync(chitietgiohang);
                await lavenderContext.SaveChangesAsync();
            }
            else
            {
                chitietgiohang.Soluong += 1;
                await lavenderContext.SaveChangesAsync();
            }

            
            return StatusCode(200, Json(chitietgiohang));
        }


        [Route("/cart")]
        [HttpGet]
        public async Task<IActionResult> GetCart([FromQuery] string makhachhang)
        {
            var giohang = await (from g in lavenderContext.Giohang
                                 select g).ToListAsync();
            if (giohang == null||giohang.Count()==0) return StatusCode(404);


            return StatusCode(200, Json(giohang));
        }
    }

}



