using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tutor.Services
{
    public interface IRandomPassword
    {
        public string GetRandomPassword(int length = 10);
    }
}
