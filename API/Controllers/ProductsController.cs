using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.controllers {

  [ApiController]
  [Route("[controller]")]
  public class ProductsController : ControllerBase {

    private readonly APIContext _context;
    private readonly IWebHostEnvironment _hosting;

    public ProductsController(APIContext context, IWebHostEnvironment hosting) {
      _context = context;
      _hosting = hosting;
    }

    // method for getting a list of all products
    public async Task<IEnumerable<Product>> Get() {
      List<Product> ProductList = await _context.Product.ToListAsync();
      return ProductList;
    }

    // method for posting normal entity to DB
    [HttpPost]
    public async Task<Product> Post(Product product) {
      _context.Product.Add(product);
      await _context.SaveChangesAsync();
      return product;
    }

    [Route("[action]")]
    public void UploadImage(IFormFile file){
        string webRootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream( absolutePath, FileMode.Create )){
            file.CopyTo( fileStream );
        }
    }

    // method for updating entity in database
    [HttpPut]
    public async Task<Product> Put(Product product) {
      _context.Update(product);
      await _context.SaveChangesAsync();
      return product;
    }

    // method for deleting entity from database
    [HttpDelete("{id}")]
    public async Task<Product> Delete(int id) {
      // find appropriate record based in id
      Product productToDelete = await _context.Product.FirstAsync( product => product.Id == id);

      // delete from DB
      _context.Product.Remove(productToDelete);
      await _context.SaveChangesAsync();
      return productToDelete;
    }
  }
}