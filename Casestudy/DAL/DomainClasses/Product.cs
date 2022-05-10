using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Casestudy.DAL.DomainClasses
{
    public class Product
    {
        [Key]
        [StringLength(15)]
        public string? Id { get; set; }
        public int BrandId { get; set; }

        [ForeignKey("BrandId")]
        public Brand? Brand { get; set; } // generates FK(belongs to a brand 1:n relationship)

        [Column(TypeName = "timestamp")]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [MaxLength(8)]
        public byte[]? Timer { get; set; }

        [Required]
        [StringLength(50)]
        public string? ProductName { get; set; }

        [Required]
        [StringLength(20)]
        public string? GraphicName { get; set; }

        [Column(TypeName = "money")]
        public decimal CostPrice { get; set; }

        [Column(TypeName = "money")]
        public decimal MSRP { get; set; }

        [Required]
        public int QtyOnHand { get; set; }

        [Required]
        public int QtyOnBackOrder { get; set; }

        [Required]
        [StringLength(200)]
        public string? Description { get; set; }
    }
}
