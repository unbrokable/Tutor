using System;

namespace Tutor.DAL.Entities
{
    public class Announcements
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public string Location { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Subjects Subject { get; set; }

    }
}
