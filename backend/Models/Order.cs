using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GrillHouseAPI.Models{
    public class Order{
        [Key]
        public int OrderId { get; set; }
        public List<OrderLine> OrderLines { get; set; }
        public string OrderType { get; set; }
        public string StreetAddress { get; set; }
        public int ZipCode { get; set; }
        public string DeliveryInstruction { get; set; }
        public int PaymentId { get; set; }
    }
}