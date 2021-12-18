using System;
using System.Collections.Generic;
using Tutor.DAL.Entities;

namespace Tutor.Models.Announcement
{
    public class AnnouncementCreateViewModel
    {
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public int SubjectId { get; set; }

        public List<AnnouncementDates> Dates { get; set; }
    }
}
