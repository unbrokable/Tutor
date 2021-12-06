using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Tutor.Services
{
    public interface IImageHandler
    {
        Task<string> SaveAsync(IFormFile img);
    }
}
