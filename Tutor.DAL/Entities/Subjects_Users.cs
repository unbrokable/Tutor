using System;
using System.Collections.Generic;
using System.Text;

namespace Tutor.DAL.Entities
{
    public class Subjects_Users
    {
        public int Id { get; set; }

        public int UsersID{ get; set; }
        public User User { get; set; }

        public int SubjectsID { get; set; }
        public Subjects Subject { get; set; }
       
    }
}
