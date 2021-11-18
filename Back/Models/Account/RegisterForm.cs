namespace Back.Models.Account
{
    public class RegisterForm
    {
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public override string ToString(){
            base.ToString();
            return "name="+name+"email=" + email+ " password=" + password;
        }
    }
}