using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL.Configuration
{
    public class Subjects_UsersEntityConfiguration : IEntityTypeConfiguration<Subjects_Users>
    {
        public void Configure(EntityTypeBuilder<Subjects_Users> builder)
        {
            builder.ToTable("Subjects_Users", "dbo");

            builder.HasKey(x => new { x.Id });

            builder.HasOne(x => x.User)
                .WithMany(x => x.Subjects_Users)
                .HasForeignKey(x => x.UsersID);

            builder.HasOne(x => x.Subject)
                .WithMany(x => x.Subjects_Users)
                .HasForeignKey(x => x.SubjectsID);
        }
    }
}
