using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Tutor.DAL.Entities;

namespace Tutor.DAL
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users {get; set;}

        public DbSet<Announcements> Announcements { get; set; }

        public DbSet<Subjects> Subjects { get; set; }

        public DbSet<AnnouncementDates> AnnouncementDates { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationContext).Assembly);
            SeedSubject(modelBuilder);
        }

        private void SeedSubject(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subjects>().HasData(new List<Subjects>()
            {
                new Subjects()
                {
                    Id = 1,
                    Name = "Math"
                },
                new Subjects()
                {
                    Id = 2,
                    Name = "Literature"
                },
                new Subjects()
                {
                    Id = 3,
                    Name ="ZNO"
                }
            });
        }
    }

}
