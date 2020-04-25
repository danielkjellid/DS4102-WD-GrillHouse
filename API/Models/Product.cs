using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace API.Models {

  public class Product {

    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public float Price { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }

    // hackey foreign key to categories
    public int CategoryId { get; set; }
  }
}