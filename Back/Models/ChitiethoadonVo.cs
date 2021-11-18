using System;
using System.Collections.Generic;
using Newtonsoft.Json;

#nullable disable

namespace Back.Models
{
    public partial class Chitietgiohang
    {
        public int Magiohang { get; set; }
        public int Masanpham { get; set; }
        public int Soluong { get; set; }

        public virtual Giohang MagiohangNavigation { get; set; }
        public virtual Sanpham MasanphamNavigation { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
