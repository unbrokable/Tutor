using System;

namespace Tutor.Models.Announcement
{
    public class AnnouncementViewModel
    {
        public int Id { get; set; }
        public string User { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string Subject { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
