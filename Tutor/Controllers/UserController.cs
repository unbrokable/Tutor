using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Tutor.DAL;
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

        public UserController(IMapper mapper, ApplicationContext applicationContext)
        {
            this.applicationContext = applicationContext;
            this.mapper = mapper;
        }

       [Authorize]
       public async Task<UserViewModel> Get()
       {
            var userEmail = User.GetEmail();

            var user = await applicationContext
                .Users
                .FirstOrDefaultAsync(i => i.Email == userEmail);

            return mapper
                .Map<UserViewModel>(user);
       }
    }
}
