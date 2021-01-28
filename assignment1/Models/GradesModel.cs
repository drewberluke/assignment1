using System;
using System.ComponentModel.DataAnnotations;

namespace assignment1.Models
{
    public class GradesModel
    {
        [Required]
        [Range(0,100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double group { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double exams { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a number between 0 and 100")]
        public double intex { get; set; }
    }
}
