using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GrillHouseAPI.Models;

namespace GrillHouseAPI.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase{
        private readonly GrillHouseContext _context;
        public CategoryController(GrillHouseContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Category>> Get(){
            List<Category> categoryList = await _context.Category.ToListAsync();
            return categoryList;
        }

        [HttpGet("{id}")]
        public async Task<Category> Get(int id){
            Category category = await _context.Category.FirstOrDefaultAsync( _category => _category.CategoryId == id );
            return category;
        }

        [HttpPost]
        public async Task<Category> ProductAsync(Category newCategory){
            _context.Category.Add(newCategory);
            await _context.SaveChangesAsync();
            return newCategory;
        }

        [HttpPut]
        public async Task<Category> Put(Category updateCategory){
            _context.Update(updateCategory);
            await _context.SaveChangesAsync();
            return updateCategory;
        }

        [HttpDelete("{id}")]
        public async Task<Category> Delete(int id){
            Category categoryToDelete = await _context.Category.FirstAsync( category => category.CategoryId == id );
            _context.Category.Remove( categoryToDelete );
            await _context.SaveChangesAsync();
            return categoryToDelete;
        }
    }

    

}