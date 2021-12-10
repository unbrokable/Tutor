using AutoMapper;
using Tutor.DAL.Entities;
using Tutor.Models.Authorize;
using Tutor.Models.User;

namespace Tutor.Infrastructure.Profiles
{
    public class AuthorizeProfile: Profile
    {
        public AuthorizeProfile()
        {
            CreateMap<RegistrationViewModel, User>()
                .ForMember(i => i.Role, j => j.MapFrom(j => (RoleType)j.Role))
                .ForMember(i => i.LastName, j => j.MapFrom(j => j.LastName))
                .ForMember(i => i.FirstName, j => j.MapFrom(j => j.FirstName));

            CreateMap<User, UserViewModel>();
        }
    }
}
