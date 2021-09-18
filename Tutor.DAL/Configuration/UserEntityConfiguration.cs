using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL.Configuration
{
    public class UserEntityConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .HasIndex(i => i.Email)
                .IsUnique();

            builder.HasKey(i => i.Id);

            builder.Property(I => I.Email)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(i => i.Name)
                .HasMaxLength(100);

            builder.Property(i => i.Password)
                .HasMaxLength(100);
        }
    }
}
