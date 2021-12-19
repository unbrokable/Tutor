using System;
using System.Collections.Generic;
using Tutor.DAL.Entities;
using Tutor.Models.Authorize;

namespace Tutor.Models.Announcement
{
    public class AnnouncementCreateViewModel
    {
        public decimal Price { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public int SubjectId { get; set; }

        public List<AnnouncementDatesCreateViewModel> Dates { get; set; }
    }
}
