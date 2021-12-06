using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Tutor.DAL;
using Tutor.DAL.Entities;
using Tutor.JWT;
using Tutor.Models.Authorize;
using Tutor.Services;

namespace Tutor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorizeController : ControllerBase
    {
        private readonly ApplicationContext _dataBase;
        private readonly IMapper _mapper;
        private readonly IAuthorizationService _authorizationService;
        private readonly IImageHandler imageHandler;

        public AuthorizeController(ApplicationContext dataBase, IImageHandler imageHandler, IMapper mapper, IAuthorizationService authorizationService)
        {
            this._dataBase = dataBase;
            this._mapper = mapper;
            this._authorizationService = authorizationService;
            this.imageHandler = imageHandler;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginViewModel login)
        {
            var user = await _dataBase
                 .Users
                 .FirstOrDefaultAsync(i => i.Email == login.Email && i.Password == login.Password);

            if(user is null)
            {
                return BadRequest();
            }

            var claims = new[] {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role,user.Role.ToString())
            };

            var data = _authorizationService
                .GenerateTokens(claims, DateTime.Now);

            return Ok(new { 
                data.AccessToken,
                Role = user.Role.ToString()
            });
        }

        [HttpPost("registration")]
        public async Task<ActionResult> Registration([FromForm]RegistrationViewModel registration)
        {
            var user = _mapper.Map<User>(registration);

            await _dataBase
                .Users
                .AddAsync(user);

            try
            {
                await _dataBase
                    .SaveChangesAsync();
            }
            catch (Exception e)
            {
                throw;
            }
         
            var claims = new[] {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role,user.Role.ToString())
            };

            var data = _authorizationService
                .GenerateTokens(claims, DateTime.Now);

            return Ok(new
            {
                data.AccessToken,
                Role = user.Role.ToString()
            });
        }

    }
}
