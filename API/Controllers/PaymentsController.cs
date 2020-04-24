using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.controllers{

    [ApiController]
    [Route("[controller]")]
    public class PaymentsController : ControllerBase {

        private readonly APIContext _context;
        public PaymentsController(APIContext context) {
            _context = context;
        }

    }
}