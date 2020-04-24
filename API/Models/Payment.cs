using System.ComponentModel.DataAnnotations;

namespace API.Models{
    public class Payment{
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public int CardSummary { get; set; }
    }
}