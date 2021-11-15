using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tutor.Models.Authorize
{
    public class RegistrationViewModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public IFormFile Img { get; set; } 
        public int Role { get; set; }
        public string Password { get; set; }
    }
}
