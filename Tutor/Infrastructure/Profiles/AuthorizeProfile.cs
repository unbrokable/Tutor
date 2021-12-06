using AutoMapper;
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
                .ForMember(i => i.Surname, j => j.MapFrom(j => j.LastName))
                .ForMember(i => i.Name, j => j.MapFrom(j => j.FirstName));
        }
    }
}
