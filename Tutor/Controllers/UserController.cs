using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Tutor.DAL;
using Tutor.DAL.Entities;
using Tutor.Extentions;
using Tutor.Models.User;
using Tutor.Services;

namespace Tutor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ApplicationContext applicationContext;
        private readonly IImageHandler imageHandler;
        public UserController(IMapper mapper, ApplicationContext applicationContext, IImageHandler imageHandler)
        {
            this.applicationContext = applicationContext;
            this.mapper = mapper;
            this.imageHandler = imageHandler;
        }

       [Authorize]
       [HttpGet]
       public async Task<UserViewModel> Get()
       {
            var userEmail = User.GetEmail();

            var user = await applicationContext
                .Users
                .FirstOrDefaultAsync(i => i.Email == userEmail);

            return mapper
                .Map<UserViewModel>(user);
       }

        [Authorize]
        [HttpPost]
        public async Task<UserViewModel> Update([FromForm] UserUpdateViewModel userUpdateView)
        {
            var userEmail = User.GetEmail();

            var user = await applicationContext
                .Users
                .FirstOrDefaultAsync(i => i.Email == userEmail);

            if (userUpdateView.Image != null)
            {
                user.Image = await imageHandler.SaveAsync(userUpdateView.Image);
            }

            user = user.Update(userUpdateView);

            await applicationContext.SaveChangesAsync();

            return mapper
                .Map<UserViewModel>(user);
        }

        [HttpGet("test")]
        public async Task<IEnumerable<User>> GetUser()
        {
            return await applicationContext.Users.ToListAsync();
        }

    }
}
