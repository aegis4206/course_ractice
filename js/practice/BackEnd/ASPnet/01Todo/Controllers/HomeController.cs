using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using _01Todo.Models;
using _01Todo.Data;


namespace _01Todo.Controllers
{
    public class HomeController : Controller
    {
        TodoContext db = new TodoContext();
        // GET: Home
        public ActionResult Index()
        {
            var todoes = db.ToDoes.OrderBy(m=>m.Date).ToList();
            //上下相等
            //var todoes = from t in db.ToDoes
            //             orderby t.Date
            //             select t;

            return View(todoes);
            //return View(todoes.ToList());
        }

        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(string Title,string Image,DateTime Date)
        {
            ToDo todo = new ToDo();
            todo.Title = Title;
            todo.Image = Image;
            todo.Date = Date;

            db.ToDoes.Add(todo);
            db.SaveChanges();

            ViewBag.Title2 = Title;
            ViewBag.Image = Image;
            ViewBag.Date = Date;

            return RedirectToAction("Index");
        }
        public ActionResult Delete(int id)
        {
            var todo =db.ToDoes.Where(m=>m.ID==id).FirstOrDefault();
            //上下相等
            //var todo2 = from t in db.ToDoes
            //            where t.ID == id
            //            select t;
            db.ToDoes.Remove(todo);
            db.SaveChanges();


            return RedirectToAction("Index");
        }
        public ActionResult Edit(int id)
        {
            var todo = db.ToDoes.Where(m => m.ID == id).FirstOrDefault();
            
            return View(todo);
        }
        [HttpPost]
        public ActionResult Edit(int ID, string Title, string Image, DateTime Date)
        {
            var todo = db.ToDoes.Where(m => m.ID == ID).FirstOrDefault();
            todo.Title = Title;
            todo.Image = Image;
            todo.Date = Date;
            db.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}