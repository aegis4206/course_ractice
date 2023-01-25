using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPnet.Controllers
{
    public class _06HWController : Controller
    {
        const string eng = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
        // GET: _06HW
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string id)
        //ActionResult加入View
        {

            string result = "";
            if (!LengthCheck(ref id))
                result = "格式有誤!";
            else if (!LetterCheck(ref id))
                result = "格式有誤!";
            else if (!GenderCheck(ref id))
                result = "格式有誤!";
            else if (!NumberCheck(ref id))
                result = "格式有誤!";
            else if (!RuleCheck(ref id))
                result = "此身分證字號不正確!";
            else
                result = "此身分證字號合法!";

            ViewBag.Result = result;
            return View();

        }
        public bool LengthCheck(ref string id)
        {
            if (id.Length == 10)
                return true;

            return false;

        }
        public bool LetterCheck(ref string id)
        {
            //string eng = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
            string w = id.Substring(0, 1);
            //第一種作法
            //for(int i = 0; i < eng.Length; i++)
            //{
            //    if (eng.IndexOf(w) >= 0)
            //    {
            //        return true;
            //    }
            //}
            //return false;

            //第二種作法
            if (eng.Contains(w))
                return true;

            return false;

        }

        public bool GenderCheck(ref string id)
        {
            string gender = id.Substring(1, 1);

            if (gender == "1" || gender == "2")
                return true;

            return false;

        }

        public bool NumberCheck(ref string id)
        {
            int num = 0;
            bool flag = false;
            try
            {
                for (int i = 2; i < 10; i++)
                {
                    num = Convert.ToInt16(id.Substring(i, 1)); 
                    //確認上行是否能轉
                }
                return true;
            }
            catch
            //例外發生時執行
            {
                return false;
            }
                //finally不管有沒有例外發生都執行
                //finally
                //{

                //}


                //if (num >= 0 && num <= 9)
                //    flag = true;
                //else
                //    return false;
        }

        public bool RuleCheck(ref string id)
        {
            string first = id.Substring(0,1); //first 第一個英文
            int a = eng.IndexOf(first) + 10; //找出英文所在的陣列號碼後+10

            int n1 = a / 10;
            int n2 = a % 10;
            int[] n = new int[9];

            for (int i = 0; i < n.Length; i++)
                n[i] = Convert.ToInt16(id.Substring(i+1, 1));

            int result = 0;
            for (int i = 0; i < n.Length; i++)
                result += n[i]*(8-i);
            result += n1 * 1 + n2 * 9+ n[8];
            if (result % 10 == 0)
                return true;
            return false;
        }
    }
}