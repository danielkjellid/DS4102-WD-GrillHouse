using Microsoft.EntityFrameworkCore;

namespace API.Models {

  public class CategoryContext : DbContext {

    public CategoryContext(DbContextOptions<CategoryContext> options):base(options) {}

    public DbSet<API.Models.Category> Category { get; set; }
  }
}