using Microsoft.EntityFrameworkCore;

namespace API.Models {

  public class APIContext : DbContext {

    public APIContext(DbContextOptions<APIContext> options):base(options) {}

    // add instances to database
    public DbSet<API.Models.Category> Category { get; set; }
<<<<<<< HEAD
    public DbSet<API.Models.Product> Product { get; set; }
=======
    public DbSet<API.Models.Payment> Payment { get; set; }
>>>>>>> 664b2dbee2cef6fe5c4636067b3335093591e707
  }
}