using System;
using System.Collections.Generic;

namespace ShipRegistry.Models
{
    public partial class ShipDetails
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Mass { get; set; }
        public int TopSpeed { get; set; }
        public int PowerRating { get; set; }
    }
}
