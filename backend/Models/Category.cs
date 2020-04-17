using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class Category{
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public List<Product> Products { get; set; }
    }
}