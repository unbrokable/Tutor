using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Tutor.DAL;
using Tutor.DAL.Entities;
using Tutor.Extentions;
using Tutor.Models.User;

namespace Tutor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ApplicationContext applicationContext;
        private readonly UserManager<User> userManager;

        public UserController(IMapper mapper, ApplicationContext applicationContext, UserManager<User> userManager)
        {
            this.applicationContext = applicationContext;
            this.mapper = mapper;
            this.userManager = userManager;
        }

 /*      [Authorize]
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
*/

        [Authorize]
        [HttpGet]
        public async Task<UserViewModel> MyAccount()
        {
            var user = await applicationContext.Users.FirstOrDefaultAsync(u => u.Email == User.GetEmail());

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var model = new UserViewModel()
            {
                Name = user.Name,
                Surname = user.Surname,
                DateOfBirth = user.DateOfBirth,
                Education = user.Education,
                Gender = user.Gender,
                Image = user.Image,
                Email = user.Email,
                Phone = user.Phone,
            };

            return model;
        }

        [Authorize]
        [HttpPost]
        public async Task<UserViewModel> MyAccount(UserViewModel vm)
        {
            var userToUpdate = new User()
            {
                Id = (await applicationContext.Users.FirstAsync(u => u.Id == vm.Id)).Id,
                Name = vm.Name,
                Surname = vm.Surname,
                Gender = vm.Gender,
                Email = vm.Email,
                Education = vm.Education,
                DateOfBirth = vm.DateOfBirth,
                Image = vm.Image,
                Phone = vm.Phone
            };


            if (userToUpdate == null)
            {
                throw new Exception("Cannot update user");
            }
            else
            {
                applicationContext.Users.Update(userToUpdate);
            }

            return mapper.Map<UserViewModel>(userToUpdate);
        }


    }
}
