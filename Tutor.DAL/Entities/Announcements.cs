using System;
using System.Collections.Generic;
using System.Text;

namespace Tutor.DAL.Entities
{
    public class Announcements
    {
        public int Id { get; set; }

        public int UserID { get; set; }
        public User User { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public Subjects Subject { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime PublishDate { get; set; }


    }
}
