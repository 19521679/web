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
            Console.WriteLine("giohang"+giohang);
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
                                                    select c).FirstOrDefaultAsync();
            if (chitietgiohang== null)
            {
                chitietgiohang = new Chitietgiohang();
                chitietgiohang.Magiohang = giohang.Magiohang;
                chitietgiohang.Soluong = 1;
                chitietgiohang.Masanpham = int.Parse(json.GetString("masanpham"));
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
            Console.WriteLine("makhachhang" + makhachhang);
            int giohangid = 0;
            giohangid = await (from g in lavenderContext.Giohang
                             where g.Makhachhang == int.Parse(makhachhang)
                             select g.Magiohang).FirstOrDefaultAsync();
            Console.WriteLine("magiohang" + giohangid);
            if (giohangid == 0) return StatusCode(404);
            var chitietgiohanglist = await (from c in lavenderContext.Chitietgiohang
                                            where c.Magiohang == giohangid
                                            select c).ToListAsync();
            foreach(var i in chitietgiohanglist)
            {
                var e = lavenderContext.Entry(i);
                e.Reference(i=>i.MasanphamNavigation).Load();
            }
            return StatusCode(200, Json(chitietgiohanglist));
        }

        //[Route("/add-to-cart")]
        //[HttpPost]

        //public async Task<IActionResult> AddToCart(JsonElement form)
        //{

        //    bool res = false;
        //    using ( MySqlConnection conn = new MySqlConnection("server=localhost;port=3306;database=lavender;user=root;password=01689808010kK"))
        //    {
        //        using (SqlCommand comm = new SqlCommand("dbo.addToCart", conn))
        //        {
        //            comm.CommandType = CommandType.StoredProcedure;

        //            SqlParameter p1 = new SqlParameter("@makhachhang", SqlDbType.NVarChar);
        //            SqlParameter p2 = new SqlParameter("@makhachhang", SqlDbType.NVarChar);
        //            // You can call the return value parameter anything, .e.g. "@Result".
        //            SqlParameter p3 = new SqlParameter("@Result", SqlDbType.Bit);

        //            p1.Direction = ParameterDirection.Input;
        //            p2.Direction = ParameterDirection.Input;
        //            p3.Direction = ParameterDirection.ReturnValue;

        //            p1.Value = "1";
        //            p2.Value = "1";

        //            comm.Parameters.Add(p1);
        //            comm.Parameters.Add(p2);
        //            comm.Parameters.Add(p3);
        //            conn.Open();
        //            comm.ExecuteNonQuery();

        //            if (p3.Value != DBNull.Value)
        //                res = (bool)p3.Value;
        //        }
        //    }
        //    Console.WriteLine("res"+ res);
        //    return StatusCode(200);
        //}

    }

}



