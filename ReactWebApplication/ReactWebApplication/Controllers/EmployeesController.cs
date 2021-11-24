using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EFDataAcessLayer;
using EFDataAcessLayer.Model;
using System.IO;

namespace ReactWebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly AppDBContext context;

        public EmployeesController(AppDBContext context)
        {
            this.context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployee()
        {
            return await context.Employee.ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            context.Entry(employee).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            context.Employee.Add(employee);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            context.Employee.Remove(employee);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeExists(int id)
        {
            return context.Employee.Any(e => e.Id == id);
        }

        [Route("EmployeeImage")]
        [HttpPost]
        public ActionResult EmployeeImage([FromForm] EmployeeImage context)
        {
            // Getting Name
            string name = context.Name;
            // Getting Image
            var image = context.Avatar;
            // Saving Image on Server
            if (image.Length > 0)
            {
                using (var fileStream = new FileStream(@"C:\Users\ASUS\Desktop\path\" + image.FileName, FileMode.Create))
                {
                    image.CopyTo(fileStream);
                }
            }
            return Ok(new { status = true, message = "File Save Succesfully" });
        }
    }

    public class EmployeeImage 
    {


        public IFormFile Avatar { get; set; }

     
        public string Name { get; set; }
    }
}
