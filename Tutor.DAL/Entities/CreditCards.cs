using System;
using System.Collections.Generic;
using System.Text;

namespace Tutor.DAL.Entities
{
    public class CreditCards
    {
        public int Id { get; set; }

        public int UsersID { get; set; }
        public User User { get; set; }

        public int Numbers { get; set; }
        public double Money { get; set; }

    }
}
