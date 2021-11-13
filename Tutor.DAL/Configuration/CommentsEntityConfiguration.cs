using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL.Configuration
{
    public class CommentsEntityConfiguration : IEntityTypeConfiguration<Comments>
    {
        public void Configure(EntityTypeBuilder<Comments> builder)
        {
            builder.ToTable("Comments", "dbo");

            builder.HasKey(x => new { x.Id });

            builder.Property(x => x.Content)
                .IsRequired()
                .HasMaxLength(350);
        }
    }
}
