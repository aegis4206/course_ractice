using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "http://aegis4206.tplinkdns.com:8000", headers: "*", methods: "*")]
    public class CourseController : ApiController
    {
        
        List<Course> courses = new List<Course>
        {
            new Course{
                Id="a37b0e7a-84f8-4ba7-9b16-1138962d9d5a",
                Key= 0,
                Method="內用",
                Name= "Mickey",
                Order = new List<OrderItem>
                {
                new OrderItem
                    {
                    Count = 3,
                    Index = 1,
                    Key = 0,
                    Memo = "無備註",
                    Price = new Price  { M = 260 },
                    Size = "M",
                    Title = "日式飯糰搭法棍"
                    }
                },
                SelectedRestaurant="早午餐店",
                Time="2023/7/14 上午11:06:19",
                Total=780,
                Contact="0912345678"
            },
            
        };
        public IEnumerable<Course> Get() 
        {
            return courses;
        }
    }
}