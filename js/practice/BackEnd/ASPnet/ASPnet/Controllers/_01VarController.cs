using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPnet.Controllers
{
    public class _01VarController : Controller
    {
        // GET: _01Var
        public string Index()
        {
            //字串
            string w = "Hello World";
            return w;
        }
        public string boolIndex(bool gender)
        {
            //布林值
            bool w = gender;
            if (w)
                return "男生";
            return "女生";
        }
        //網頁上給參數 加上 ?變數名稱=值
        //?gender=true
        public string stringIndex(string name,bool gender)
        {
            //字串宣告初始化
            string g = "";
            if (gender)
                g = "男";
            else
                g = "女";
            //字串
            return "<h1>"+name + "您好!!您的性別是"+g+"生!!</h1>";

            //?gender=true&name=陳俊佑 順序無關西
        }
        public void numberIndex()
        {   //void代表不回傳任何值
            //數值
            byte a = 255; //0~255整數值(8位正元整數)
            sbyte b = -128; //含正負數的8位元整數 -128~127
            short c = 123;  //含正負數的16位元整數 -32768~32767
            int d = 234;  //含正負數的32位元整數 -2147483648~2147483647
            long e = 456123;//含正負數的64位元整數

            ///////////////
            ushort f = 123; // 0~65535整數值(16位正元整數)
            uint g = 123; //(32位正元整數)
            ulong h = 123;//(64位正元整數)

            ///////////////
            float i = 123.23456f; //單精準度浮點數
            double j = 123.456789; //雙精準度浮點數
            //可容許長度不同
        }
    }
}
//變數命名原則
//不可以用保留字
//開頭必須是英文字母或底線
//使用有意義的名稱
//使用薰牙利命名法