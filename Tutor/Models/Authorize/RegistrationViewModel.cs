using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tutor.Models.Authorize
{
    public class RegistrationViewModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int Role { get; set; }
        public string Password { get; set; }
    }
}
