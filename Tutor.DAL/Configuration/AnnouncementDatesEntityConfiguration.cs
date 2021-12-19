using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL.Configuration
{
    public class AnnouncementDatesEntityConfiguration : IEntityTypeConfiguration<AnnouncementDates>
    {
        public void Configure(EntityTypeBuilder<AnnouncementDates> builder)
        {
            builder.ToTable("AnnouncementDates", "dbo");

            builder.HasKey(x => new { x.Id });     

        }
    }
}
