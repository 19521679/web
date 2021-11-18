using System;
using System.Collections.Generic;
using Newtonsoft.Json;

#nullable disable

namespace Back.Models
{
    public partial class Taikhoankhachhang
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public int Makhachhang { get; set; }

        public virtual Khachhang MakhachhangNavigation { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
