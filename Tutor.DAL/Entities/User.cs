using System;
using System.Collections.Generic;

namespace Tutor.DAL.Entities
{
    public enum RoleType
    {
        Teacher,
        Student,
        Admin,
    }

    public class User
    {
        public int Id { get; set; }
        public string  FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public RoleType Role { get; set; }
        public string Education { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Image { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string Address { get; set; }

        public IList<CreditCards> CreditCards { get; set; }
        public IList<Announcements> Announcements { get; set; }
        public IList<Comments> Comments { get; set; }
        public IList<Subjects_Users> Subjects_Users { get; set; }
    }
}
