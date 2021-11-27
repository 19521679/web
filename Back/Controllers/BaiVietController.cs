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
using Microsoft.EntityFrameworkCore;

namespace Back.Controllers
{
    public class BaiVietController : Controller
    {
        private readonly ILogger<BaiVietController> _logger;
        lavenderContext lavenderContext;
        public BaiVietController(ILogger<BaiVietController> logger, lavenderContext lavenderContext)
        {
            _logger = logger;
            this.lavenderContext = lavenderContext;
        }   

        [Route("/baiviet")]
        [HttpGet]
        public async Task<IActionResult> GetAllBaiViet()
        {
            //var baivietlist = await (from bv in lavenderContext.Baiviets
            //                                select bv).ToListAsync();
         var baivietlist=   from st in lavenderContext.Baiviets select st;

            /*   foreach (var i in baivietlist)
               {
                   var e = lavenderContext.Entry(i);
                   await e.Reference(x => x.ManhacungcapNavigation).LoadAsync();
                   await e.Reference(x => x.MasanphamNavigation).LoadAsync();
               }*/
            return StatusCode(200, JsonConvert.SerializeObject(baivietlist));
        }
            [Route("/baiviet/1")]
            [HttpGet]
            public async Task<IActionResult> GetAllBaiViet2()
            {
                //var baivietlist = await (from bv in lavenderContext.Baiviets
                //                                select bv).ToListAsync();
                var baivietlist = from st in lavenderContext.Baiviets where st.mabaiviet==1 select st ;

                /*   foreach (var i in baivietlist)
                   {
                       var e = lavenderContext.Entry(i);
                       await e.Reference(x => x.ManhacungcapNavigation).LoadAsync();
                       await e.Reference(x => x.MasanphamNavigation).LoadAsync();
                   }*/
                return StatusCode(200, JsonConvert.SerializeObject(baivietlist));
            }
    }
}
