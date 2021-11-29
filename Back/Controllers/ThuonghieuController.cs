
using System.Data;

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

    public class ThuonghieuController : Controller
    {
        private readonly ILogger<ThuonghieuController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public ThuonghieuController(ILogger<ThuonghieuController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }

        [Route("/thuonghieu")]
        [HttpGet]
        public async Task<IActionResult> AllTrademark(string loai)
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

            var sanphamtemp = await (from s in lavenderContext.Sanpham
                                     where s.Maloai == maloai
                                     select s).FirstOrDefaultAsync();
            if (sanphamtemp == null) return StatusCode(404);

            var thuonghieus = await (from t in lavenderContext.Thuonghieu
                                     where t.Mathuonghieu == sanphamtemp.Mathuonghieu
                                     select t).ToListAsync();
            return StatusCode(200, Json(thuonghieus));
        }
    }

}



