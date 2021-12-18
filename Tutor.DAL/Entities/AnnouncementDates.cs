using System;
using System.Collections.Generic;
using System.Text;

namespace Tutor.DAL.Entities
{
    public class AnnouncementDates
    {
        public int Id { get; set; }

        public int AnnouncementId { get; set; }
        public Announcements Announcement { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int DayOfWeek { get; set; }
    }
}
