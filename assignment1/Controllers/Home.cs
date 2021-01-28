using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using assignment1.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace assignment1.Controllers
{
    public class Home : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Grades")]
        public IActionResult Grades()
        {
            return View();
        }

        [HttpPost("Grades")]
        public IActionResult GradesResult(GradesModel model)
        {
            ViewBag.assignments = model.assignments;
            ViewBag.group = model.group;
            ViewBag.quizzes = model.quizzes;
            ViewBag.exams = model.exams;
            ViewBag.intex = model.intex;
            return View();
        }
    }
}
