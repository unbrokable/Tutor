using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL.Configuration
{
    class CreditCardEntityConfiguration : IEntityTypeConfiguration<CreditCards>
    {
        public void Configure(EntityTypeBuilder<CreditCards> builder)
        {
            builder.ToTable("CreditCards", "dbo");

            builder.HasKey(x => new { x.Id });

            builder.Property(x => x.Numbers)
                .IsRequired();

        }
    }
}
