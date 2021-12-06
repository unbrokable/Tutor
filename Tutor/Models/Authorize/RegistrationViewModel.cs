using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tutor.Models.Authorize
{
    public class RegistrationViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int Role { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    
    
    }
}
