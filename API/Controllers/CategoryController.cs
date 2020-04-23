using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.controllers {

  [ApiController]
  [Route("[controller]")]
  public class CategoryController : ControllerBase {

    private readonly CategoryContext _context;
    public CategoryController(CategoryContext context) {
      _context = context;
    }

    // method for listing all categories
    public async Task<IEnumerable<Category>> Get() {
      List<Category> CategoryList = await _context.Category.ToListAsync();
      return CategoryList;
    }

    // method for posting entity to database
    [HttpPost]
    public async Task<Category> Post(Category category) {
      _context.Category.Add(category);
      await _context.SaveChangesAsync();
      return category;
    }

    // method for updating entity in database
    [HttpPut]
    public async Task<Category> Put(Category category) {
      _context.Update(category);
      await _context.SaveChangesAsync();
      return category;
    }

    // method for deleting entity fra database
    [HttpDelete]
    public async Task<Category> Delete(int id) {
      // find appropriate record base on ID
      Category categoryToDelete = await _context.Category.FirstAsync( category => category.Id == id);
      
      // delete from DB
      _context.Category.Remove(categoryToDelete);
      await _context.SaveChangesAsync();
      return categoryToDelete;
    }
  }
}