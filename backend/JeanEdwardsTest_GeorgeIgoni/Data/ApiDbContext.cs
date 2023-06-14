using JeanEdwardsTest_GeorgeIgoni.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace JeanEdwardsTest_GeorgeIgoni.Data
{
    public class ApiDbContext : DbContext
    {
        public DbSet<SearchQuery> SearchQueries { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=JeanEdwardsTestDb_GI;");
        }
    }
}
