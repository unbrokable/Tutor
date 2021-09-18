using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Tutor.JWT
{
    public interface IAuthorizationService
    {
        public JwtAuthorizationViewModel GenerateTokens( Claim[] claims, DateTime now);
    }
}
