using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL.Configuration
{
    public class AnnouncementsEntityConfiguration : IEntityTypeConfiguration<Announcements>
    {
        public void Configure(EntityTypeBuilder<Announcements> builder)
        {
            builder.ToTable("Announcements", "dbo");

            builder.HasKey(x => new { x.Id });

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.Description)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.StartDate)
                .IsRequired();

            builder.Property(x => x.EndDate)
                .IsRequired();
        }
    }
}
