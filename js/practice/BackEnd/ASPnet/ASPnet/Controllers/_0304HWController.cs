using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPnet.Controllers
{
    public class _0304HWController : Controller
    {
        // GET: _0304HW
        public void HW1(int x)
        {
            bool ans = false;
            for (int i = 2; i < x; i++)
            {
                if (x % i == 0)
                {
                    ans = true;
                    break;
                }
            }
            if (ans)
                Response.Write("這不是質數");
            else
                Response.Write("這是質數");
        }
        public void HW2(int x, int y)
        {
            int z = 0;
            //if (y > x)
            //{
            //    z = y;
            //    y = x;
            //    x = z;
            //}
            while (x != 0 && y != 0)
            {
                if (x > y)
                    x = x % y;
                else
                    y = y % x;

            }
            if (x == 0)
                Response.Write("最大公因數為" + y);
            else
                Response.Write("最大公因數為" + x);
        }
        public void HW3(int x)
        {
            int y = 0, z = 0, result = 0;
            z = x;
            do
            {
                y = x % 10;
                result += y;
                x = x / 10;

                if (x != 0)
                    result *= 10;
                else
                    break;

            } while (x != 0);


            if (z == result)
                Response.Write(z + "這是迴文" + result);
            else
                Response.Write(z + "這是不迴文" + result);
        }

        public void HW4()
        {
            int player = 1;
            int[] pokerArr = new int[52];  //52個位置

            for (int i = 0; i < 52; i++)
            {
                Random a = new Random();
                pokerArr[i] = a.Next(1, 53);
                for (int j = 0; j < i; j++)
                {
                    while (pokerArr[i] == pokerArr[j])
                    {
                        pokerArr[i] = a.Next(1, 53);
                        j = 0;

                    }
                }
                if (i % 13 == 0)
                {
                    Response.Write("<hr></hr>玩家" + player + "<hr></hr>");
                    Response.Write("<img src='../poker_img/poker(" + pokerArr[i] + ").jpg'/>");
                    player++;
                }
                else
                    Response.Write("<img src='../poker_img/poker(" + pokerArr[i] + ").jpg'/>");
            }
        }

        public void HW4_1()
        {

            int[] pokerArr = new int[52];
            for (int i = 0; i < pokerArr.Length; i++)
            {
                pokerArr[i] = i + 1;
                Response.Write("<img src='../poker_img/poker(" + pokerArr[i] + ").jpg'/>");

            }

            Response.Write("<hr>");

            Random a = new Random();

            for (int i = 0; i < pokerArr.Length; i++)
            {
                int x = 0, t = 0;
                x = pokerArr[i];
                t = a.Next(52);
                pokerArr[i] = pokerArr[t];
                pokerArr[t] = x;
                

            }
            Response.Write("<hr>");
            //洗牌完結果
            for (int i = 0; i < pokerArr.Length; i++)
            {
                Response.Write("<img src='../poker_img/poker(" + pokerArr[i] + ").jpg'/>");
            }
            Response.Write("<hr>");


            string p1 = "", p2 = "", p3 = "", p4 = "";
            string result = "";

            for (int i = 0; i < pokerArr.Length; i++)
            {
                result = "<img src='../poker_img/poker(" + pokerArr[i] + ").jpg'/>";
                switch (i % 4)
                {
                    case 0:
                        p1 += result;
                        break;
                    case 1:
                        p2 += result;
                        break;
                    case 2:
                        p3 += result;
                        break;
                    case 3:
                        p4 += result;
                        break;
                }

            }
            Response.Write("<div>玩家1:"+p1+"</div><div>玩家2:"+p2+ "</div><div>玩家3:"+p3+ "</div><div>玩家4:"+p4+"</div>");
        }
    }
}