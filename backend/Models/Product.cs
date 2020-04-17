using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class Product{
        [Key]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public string Image { get; set; } // Skal være bilde
        public int CategoryId { get; set; }
    }
}