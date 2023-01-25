using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _02Controller.Controllers
{
    public class FileUploadController : Controller
    {
        // GET: FileUpload
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(HttpPostedFileBase photo)
        {
            string fileName = "";

            if (photo != null)
            {
                if (photo.ContentLength > 0)
                {
                    fileName = photo.FileName;
                    fileName = Path.GetFileName(fileName);
                    photo.SaveAs(Server.MapPath("~/Photos/"+fileName));
                }
            }

            return RedirectToAction("showPhotos");
        }

        public string showPhotos()
        {
            string show = "";
            DirectoryInfo dir = new DirectoryInfo(Server.MapPath("~/Photos/"));
            FileInfo[] fInfo = dir.GetFiles();
            foreach(FileInfo r in fInfo)
            {
                show += "<img src='../Photos/" + r + "'width='640' height='480' />";
            }
            show += "<p><a href='Create'>返回</a></p>";
            return show;
        }
    }
}