using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [Route("GetMyName")]
        [HttpPost]
        public void GetMyName(string age)
        {

        }

        [Route("GetHerName")]
        [HttpPost]
        public void GetHerName(string newage)
        {

        }
    }
}
