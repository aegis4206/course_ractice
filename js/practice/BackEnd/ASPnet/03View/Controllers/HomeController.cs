﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using _03View.Models;
using PagedList;

namespace _03View.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(int page=1)
        {
            string[] id = {"A01", "A02", "A03", "A04", "A05", "A06", "A07" };
            string[] name = { "瑞豐夜市", "新堀江商圈", "六合夜市", "青年夜市", "花園夜市", "大東夜市", "武聖夜市" };
            string[] address = { "813高雄市左營區裕誠路", "800高雄市新興區玉衡里", "800高雄市新興區六合二路", "806前鎮區凱旋四路758號", "台南市北區海安路三段533號", "台南市東區林森路一段276號", "台南市中西區武聖路69巷42號" };

            //NightMarket nightMarket = new NightMarket();
            //nightMarket.Id = "A01";

            List<NightMarket> list = new List<NightMarket>();

            for(int i = 0; i < id.Length; i++)
            {
                NightMarket nightMarket = new NightMarket();
                nightMarket.Id = id[i];
                nightMarket.Name = name[i];
                nightMarket.Address = address[i];

                list.Add(nightMarket);
            }

            int pagesize = 3;
            int pagecurrent = page < 1 ? 1 : page;
            var pageList = list.ToPagedList(pagecurrent, pagesize);

            return View(pageList);
        }
        public ActionResult RazorTest()
        {
            return View();
        }
    }
}