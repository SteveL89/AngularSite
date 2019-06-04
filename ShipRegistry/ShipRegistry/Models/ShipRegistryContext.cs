using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ShipRegistry.Models
{
    public partial class ShipRegistryContext : DbContext
    {
        public ShipRegistryContext()
        {
        }

        public ShipRegistryContext(DbContextOptions<ShipRegistryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ShipDetails> ShipDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(local)\\sqlexpress;Database=ShipRegistry;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<ShipDetails>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
