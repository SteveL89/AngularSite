using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.EntityFrameworkCore;
using ShipRegistry.Models;

namespace ShipRegistry.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipDetailsController : ControllerBase
    {
        private readonly ShipRegistryContext _context;

        public ShipDetailsController(ShipRegistryContext context)
        {
            _context = context;
        }

        // GET: api/ShipDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShipDetails>>> GetShipDetails()
        {
            return await _context.ShipDetails.ToListAsync();
        }

        // GET: api/ShipDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShipDetails>> GetShipDetails(int id)
        {
            var shipDetails = await _context.ShipDetails.FindAsync(id);

            if (shipDetails == null)
            {
                return NotFound();
            }

            return shipDetails;
        }

        // PUT: api/ShipDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShipDetails(int id, ShipDetails shipDetails)
        {
            if (id != shipDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(shipDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!ShipDetailsExists(id))
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

        // POST: api/ShipDetails
        [HttpPost]
        public async Task<ActionResult<ShipDetails>> PostShipDetails(ShipDetails shipDetails)
        {
            _context.ShipDetails.Add(shipDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShipDetails", new { id = shipDetails.Id }, shipDetails);
        }

        // DELETE: api/ShipDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ShipDetails>> DeleteShipDetails(int id)
        {
            var shipDetails = await _context.ShipDetails.FindAsync(id);
            if (shipDetails == null)
            {
                return NotFound();
            }

            _context.ShipDetails.Remove(shipDetails);
            await _context.SaveChangesAsync();

            return shipDetails;
        }
        
        private bool ShipDetailsExists(int id)
        {
            return _context.ShipDetails.Any(e => e.Id == id);
        }
    }
}
