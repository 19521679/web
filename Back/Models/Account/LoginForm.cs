namespace Back.Models.Account
{
    public class LoginForm
    {
        public string email { get; set; }
        public string password { get; set; }
        public override string ToString(){
            base.ToString();
            return "email=" + email+ " password=" + password;
        }
    }
}