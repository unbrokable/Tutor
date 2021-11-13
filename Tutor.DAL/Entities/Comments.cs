using System;
using System.Collections.Generic;
using System.Text;

namespace Tutor.DAL.Entities
{
    public class Comments
    {
        public int Id { get; set; }

        public int CreatorID { get; set; }
        public User Creator { get; set; }

        public int DestinationUser { get; set; }
        public string Content { get; set; }
    }
}
