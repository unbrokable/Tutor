using System;

namespace Tutor.Models.User
{
    // change in future 
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Education { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool Gender { get; set; }
        public string Image { get; set; }
        public int Phone { get; set; }
    }
}
