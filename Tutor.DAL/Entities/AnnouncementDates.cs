using System;

namespace Tutor.DAL.Entities
{
    public class AnnouncementDates
    {
        public int Id { get; set; }
        public int AnnouncementId { get; set; }
        public Announcements Announcement { get; set; }
        public DateTime StarTime { get; set; }
        public DateTime EndTime { get; set; }
        public DayOfWeek Day { get; set; }
    }
}
