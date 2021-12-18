using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tutor.DAL.Entities;

namespace Tutor.Models.Authorize
{
    public class AnnouncementDatesCreateViewModel
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int DayOfWeek { get; set; }
    }
}
