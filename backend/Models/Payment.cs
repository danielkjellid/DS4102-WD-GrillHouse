using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class Payment{
        [Key]
        public int PaymentId { get; set; }
        public string Type { get; set; }
        public int CardSummary { get; set; }
    }
}