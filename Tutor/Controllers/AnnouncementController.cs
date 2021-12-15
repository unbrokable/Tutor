using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tutor.DAL;
using Tutor.DAL.Entities;
using Tutor.Extentions;
using Tutor.Models.Announcement;

namespace Tutor.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ApplicationContext applicationContext;

        public AnnouncementController(IMapper mapper, ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
            this.mapper = mapper;
        }

        [Authorize]
        [HttpPost]
        public async Task<AnnouncementViewModel> AddAnnouncement(AnnouncementCreateViewModel createViewModel)
        {
            var user = await applicationContext
                .Users
                .FirstAsync(i => i.Email == User.GetEmail());

            var announcement = mapper.Map<Announcements>(createViewModel);
            announcement.User = user;

            await applicationContext
                .Announcements
                .AddAsync(announcement);
            await applicationContext.SaveChangesAsync();

            await applicationContext
                         .Entry(announcement)
                         .Reference(i => i.Subject)
                         .LoadAsync();

            return mapper
                .Map<AnnouncementViewModel>(announcement);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnnouncement(int id, AnnouncementCreateViewModel createViewModel)
        {
            var userId = (await applicationContext
                .Users
                .FirstAsync(i => i.Email == User.GetEmail())).Id;

            var announcement = mapper.Map<Announcements>(createViewModel);
            announcement.Id = id;
            announcement.UserId = userId;

            applicationContext
                .Announcements
                .Update(announcement);
            await applicationContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveAnnouncement(int id)
        {
            applicationContext
                .Announcements
                .Remove(new Announcements { Id = id });
            await applicationContext.SaveChangesAsync();   

            return Ok();
        }

        [HttpGet]
        public async Task<IEnumerable<AnnouncementViewModel>> GetTeacherAnnouncement()
        {
            string userEmail = User.GetEmail();
            var announements = await applicationContext
                .Announcements
                .Where(i => i.User.Email == userEmail)
                .Include(i => i.User)
                .Include(i => i.Subject)
                .ToListAsync();

            return mapper.Map<IEnumerable<AnnouncementViewModel>>(announements);
        }

        [HttpGet("subjects")]
        public async Task<IActionResult> GetSubject()
        {
            return Ok(
                await applicationContext
                .Subjects
                .ToListAsync());
        }

    }
}
