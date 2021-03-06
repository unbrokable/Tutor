using AutoMapper;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Tutor.DAL;
using Tutor.DAL.Entities;
using Tutor.JWT;
using Tutor.Models.Authorize;
using Tutor.Services;
using System.Web;

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
        private readonly IConfiguration _configuration;
        private readonly IRandomPassword _randomPassword;

        public AuthorizeController(ApplicationContext dataBase, IImageHandler imageHandler, IMapper mapper, IAuthorizationService authorizationService, IConfiguration _configuration, IRandomPassword _randomPassword)
        {
            this._dataBase = dataBase;
            this._mapper = mapper;
            this._authorizationService = authorizationService;
            this.imageHandler = imageHandler;
            this._configuration = _configuration;
            this._randomPassword = _randomPassword;
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

        [HttpPost("google")]
        public async Task<ActionResult> LoginGoogle(GoogleRequestViewModel model)
        {
            var googleUser = await ValidateIdTokenAndGetUserInfo(model);

            var user = await _dataBase
                 .Users
                 .FirstOrDefaultAsync(i => i.Email == googleUser.Email);

            if(user is null)
            {
                user = new User()
                {
                    Email = googleUser.Email,
                    FirstName = googleUser.Name,
                    LastName = googleUser.FamilyName,
                    Password = _randomPassword.GetRandomPassword(),
                    Image = googleUser.Picture,
                    Role = RoleType.Student,
                    Phone = ""
                };

                await _dataBase.Users.AddAsync(user);
                await _dataBase.SaveChangesAsync();
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

        async Task<GoogleJsonWebSignature.Payload> ValidateIdTokenAndGetUserInfo(GoogleRequestViewModel vm)
        {
            return await GoogleJsonWebSignature
                .ValidateAsync(vm.Token, new GoogleJsonWebSignature.ValidationSettings()
                {
                    Audience = new List<string>() { _configuration.GetSection("clientId").Value },
                    IssuedAtClockTolerance = TimeSpan.FromSeconds(100)
                });
        }

        [HttpPost("registration")]
        public async Task<ActionResult> Registration([FromForm]RegistrationViewModel registration)
        {
            var user = _mapper.Map<User>(registration);

            var searchUser = _dataBase.Users.FirstOrDefaultAsync(u => u.Email == user.Email);

            if (searchUser != null)
            {
                return BadRequest("User with such email already exists");
            }

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
