using AutoMapper;
using System;
using Tutor.DAL.Entities;
using Tutor.Models.Announcement;
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
            
            // create separate profile 
            
            CreateMap<User, UserViewModel>();
            CreateMap<User, UserAdminViewModel>();
          
            CreateMap<Announcements, AnnouncementViewModel>()
                .ForMember(i => i.Subject, j => j.MapFrom(j => j.Subject.Name))
                .ForMember(i => i.User, j => j.MapFrom(j => j.User.FirstName + " " + j.User.LastName));
                
            CreateMap<AnnouncementCreateViewModel, Announcements>();

            CreateMap<AnnouncementDatesCreateViewModel, AnnouncementDates>()
                .ForMember(i => i.Day, j => j.MapFrom(j => (DayOfWeek)j.Day));
        }
    }
}
