using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Tutor.DAL.Entities;
using Tutor.Models.Authorize;
using Tutor.Models.User;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tutor.DAL;

namespace Tutor.Controllers
{
 
    [Route("api/[controller]/users")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;
        private readonly IMapper _mapper;
        public AdminController(ApplicationContext applicationContext, IMapper mapper)
        {
            this._applicationContext = applicationContext;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<UserAdminViewModel>> GetUsers()
        {
            var users = await _applicationContext
                .Users
                .ToListAsync();

            return _mapper
                .Map<IEnumerable<UserAdminViewModel>>(users);
        }

        [HttpGet("removes")]
        public async Task<IEnumerable<UserAdminViewModel>> GetRemovedUsers()
        {
            var users = await _applicationContext
                .Users
                .IgnoreQueryFilters()
                .Where(i => i.IsDeleted)
                .ToListAsync();

            return _mapper
                .Map<IEnumerable<UserAdminViewModel>>(users);
        }

        [HttpDelete("{id}")]
        public async Task RemoveUser(int id)
        {
            var user = new User
            {
                Id = id
            };

            _applicationContext
                .Attach<User>(user);

            user.IsDeleted = true;

            await _applicationContext
                .SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task RestoreUser(int id)
        {
            var user = new User
            {
                Id = id,
                IsDeleted = true
            };

            _applicationContext
                .Attach<User>(user);

            user.IsDeleted = false;

            await _applicationContext
                .SaveChangesAsync();
        }

        [HttpPost]
        public async Task<UserAdminViewModel> AddUser(RegistrationViewModel userCreate)
        {
            var user = _mapper
                .Map<User>(userCreate);

            await _applicationContext
                .Users
                .AddAsync(user);

            await _applicationContext
              .SaveChangesAsync();

            return _mapper
                .Map<UserAdminViewModel>(user);
        }
     }
}
