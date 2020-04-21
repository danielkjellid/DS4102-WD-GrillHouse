using System;
using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class Review{
        [Key]
        public int ReviewId { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        public int StarValue { get; set; }
        public DateTime Timestamp { get; set; } // DateTime, må fikse
    }
}