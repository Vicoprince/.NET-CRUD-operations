using Microsoft.EntityFrameworkCore;

namespace ReactASPnet.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=.; Initial Catalog=sms; Integrated Security=true; Persist Security Info=False; User Id=sa; password=P@ssw0rd; TrustServerCertificate= True");
        }
    }
}
