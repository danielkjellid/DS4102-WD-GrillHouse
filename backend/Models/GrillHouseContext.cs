using Microsoft.EntityFrameworkCore;


namespace GrillHouseAPI.Models{

    public class GrillHouseContext : DbContext {
        
        public GrillHouseContext(DbContextOptions<GrillHouseContext> options):base(options){}

        public DbSet<Product> Product { get; set; }
        public DbSet<Category> Category { get; set; }

        
        protected override void OnModelCreating (ModelBuilder modelBuilder) {
        // configures one-to-many relationship
            modelBuilder.Entity<Product>()
                .HasOne<Category>()
                .WithMany()
                .HasForeignKey(p => p.CategoryId);    
            }
        }

    }

