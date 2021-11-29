    using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Back.Models.Account;
using Back.Models;
using Newtonsoft.Json;

namespace Back.Controllers
{
    // [EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]

    [ApiController]
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;
        lavenderContext lavenderContext;
        public LoginController(ILogger<LoginController> logger, lavenderContext lavenderContext)
        {
            _logger = logger;
            this.lavenderContext = lavenderContext;
        }

        [Route("login")]
        public IActionResult LoginKhachhang(LoginForm loginForm)
        {
            var taikhoan = (from t in lavenderContext.Taikhoankhachhang
                            where t.Username.Equals(loginForm.email)
                            && t.Password.Equals(loginForm.password)
                            select t).FirstOrDefault();
            if (taikhoan == null) return StatusCode(401);
            else
            {
                //var e = lavenderContext.Entry(taikhoan);
                //e.Reference(t => t.MakhachhangNavigation).Load();
                var khachhang = (from k in lavenderContext.Khachhang
                                 where k.Makhachhang.Equals(taikhoan.Makhachhang)
                                 select k).FirstOrDefault();
                return StatusCode(200, taikhoan);
            }
            //return NoContent();
        }

    }
}
