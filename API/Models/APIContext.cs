using Microsoft.EntityFrameworkCore;

namespace API.Models {

  public class APIContext : DbContext {

    public APIContext(DbContextOptions<APIContext> options):base(options) {}

    public DbSet<API.Models.Category> Category { get; set; }
    public DbSet<API.Models.Payment> Payment { get; set; }
  }
}