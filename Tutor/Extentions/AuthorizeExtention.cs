using System.Security.Claims;

namespace Tutor.Extentions
{
    public static class AuthorizeExtention
    {
        public static string GetEmail(this ClaimsPrincipal user) => user.FindFirst(ClaimTypes.Email).Value;
    }
}
