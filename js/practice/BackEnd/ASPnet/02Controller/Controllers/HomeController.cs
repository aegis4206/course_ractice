using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace _02Controller.Controllers
{
    public class HomeController : Controller
    {
        public string ShowAry()
        {
            int[] score = { 78, 99, 20, 100, 66 };
            string show = "";
            int sum = 0;
            foreach(var i in score )
            {
                show += i+",";
                sum += i;
            }
            show += "<hr>" + "總和:" + sum;
            return show;
        }
        public string ShowImg()
        {

            string show = "";
            for(int i = 0; i <= 1; i++)
            {
                show += string.Format("<img src='/images/{0}.png'/>",i);
            }
            return show;
        }
        public string ShowIndex(int index)
        {
            string[] name = {"紅燈","綠燈" };
            string show = string.Format("<p align='center'><img src='/images/{0}.png'/><br>{1}</p>",index,name[index]);
            return show;
        }
        public string ShowSortAry()
        {
            int[] score = { 78, 99, 20, 100, 66 };

            Sort(score);
            string show = "";
            foreach (var i in score)
            {
                show += i + ",";
            }
            return show;
        }
        int[] Sort(int[] arrScore)
        {
            int a = 0;
            for (int i = 4; i >= 0; i--)
            {
                for (int j = 0; j < i; j++)
                {
                    if (arrScore[j] > arrScore[j + 1])
                    {
                        a = arrScore[j];
                        arrScore[j] = arrScore[j + 1];
                        arrScore[j + 1] = a;
                    }
                }

            }
            return arrScore;
        }
        public string showAry2()
        {
            int[] score = { 78, 99, 20, 100, 66 };
            var s = from m in score
                    orderby m descending
                    select m;

            Sort(score);
            string show = "";
            foreach (var i in s)
            {
                show += i + ",";
            }
            return show;
        }
    }
}