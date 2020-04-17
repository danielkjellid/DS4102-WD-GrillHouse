using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class OrderLine{
        [Key]
        public int OrderLineId { get; set; } 
        public int ProductId { get; set; } 
        public int amount { get; set; } 
    }
}