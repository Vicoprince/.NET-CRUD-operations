using System.ComponentModel.DataAnnotations;

namespace ReactASPnet.Models
{
    public class Student
    {
        [Key]
        public int id { get; set; }
        public string Student_name { get; set; }
        public string Student_email { get; set; }
        public string course { get; set; }
    }
}
