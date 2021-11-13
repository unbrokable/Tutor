using System;
using System.Collections.Generic;
using System.Text;

namespace Tutor.DAL.Entities
{
    public enum RoleType
    {
        User,
        Teacher
    }

    public class User
    {
        public int Id { get; set; }
        public string  Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public RoleType Role { get; set; }
        public string Education { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool Gender { get; set; }
        public string Image { get; set; }
        public int Phone { get; set; }

        public IList<CreditCards> CreditCards { get; set; }
        public IList<Announcements> Announcements { get; set; }
        public IList<Comments> Comments { get; set; }
        public IList<Subjects_Users> Subjects_Users { get; set; }
    }
}
