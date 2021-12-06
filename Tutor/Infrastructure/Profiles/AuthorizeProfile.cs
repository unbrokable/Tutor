using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tutor.DAL.Entities;
using Tutor.Models.Authorize;

namespace Tutor.Infrastructure.Profiles
{
    public class AuthorizeProfile: Profile
    {
        public AuthorizeProfile()
        {
            CreateMap<RegistrationViewModel, User>()
                .ForMember(i => i.Role, j => j.MapFrom(j => (RoleType)j.Role))
                .ForMember(i => i.Image, j => j.Ignore());
        }
    }
}
