using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Tutor.JWT
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly JwtTokenConfig jwtTokenConfig;
        private readonly byte[] secret;

        public AuthorizationService(JwtTokenConfig jwtToken)
        {
            this.jwtTokenConfig = jwtToken;
            secret = Encoding.ASCII.GetBytes(jwtTokenConfig.Secret);
        }
        public JwtAuthorizationViewModel GenerateTokens(Claim[] claims, DateTime now )
        {
            var jwtToken = new JwtSecurityToken(
                jwtTokenConfig.Issuer,
                jwtTokenConfig.Audience,
                claims,
                expires: now.AddMinutes(jwtTokenConfig.AccessTokenExpiration),
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(secret), SecurityAlgorithms.HmacSha256Signature));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwtToken);
            return new JwtAuthorizationViewModel
            {
                AccessToken = encodedJwt
            };
        }
    }
}
