using System;
using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class Review{
        [Key]
        public int ReviewId { get; set; }
        public int ProductId { get; set; }
        public string ReviewUser { get; set; }
        public string ReviewAvatar { get; set; } // Skal være et bilde
        public int StarValue { get; set; }
        public DateTime Timestamp { get; set; } // DateTime, må fikse
    }
}