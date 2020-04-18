using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GrillHouseAPI.Models;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace GrillHouseAPI.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase {
        private readonly ProductsContext _context;
        private readonly IWebHostEnvironment _hosting;
        public ProductsController(ProductsContext context, IWebHostEnvironment hosting){
            _context = context;
            _hosting = hosting;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> Get(){
            List<Product> productList = await _context.Product.ToListAsync();
            return productList;
        }

        [HttpGet("{id}")]
        public async Task<Product> Get(int id){
            Product product = await _context.Product.FirstOrDefaultAsync( _product => _product.ProductId == id );
            return product;
        }

        [HttpPost]
        public async Task<Product> ProductAsync(Product newProduct){
            _context.Product.Add(newProduct);
            await _context.SaveChangesAsync();
            return newProduct;
        }

        // Post for å legge til bilde, trenger en mappe "product-images" i wwwroot-mappe
        [HttpPost]
        [Route("[action]")]
        public void UploadImage(IFormFile file){
            string webrootpath = _hosting.WebRootPath;
            string absolutepath = Path.Combine($"{webrootpath}/product-images/{file.FileName}");

            using(var filestream = new FileStream(absolutepath, FileMode.Create)){
                file.CopyTo( filestream );
            }
        }

        [HttpPut]
        public async Task<Product> Put(Product updateProduct){
            _context.Update(updateProduct);
            await _context.SaveChangesAsync();
            return updateProduct;
        }

        [HttpDelete("{id}")]
        public async Task<Product> Delete(int id){
            Product productToDelete = await _context.Product.FirstAsync( product => product.ProductId == id );
            _context.Product.Remove( productToDelete );
            await _context.SaveChangesAsync();
            return productToDelete;
        }
    }

}