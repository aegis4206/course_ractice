using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class OrderItem
    {
        public int Count { get; set; }
        public int Index { get; set; }
        public int Key { get; set; }
        public string Memo { get; set; }
        public Price Price { get; set; }
        public string Size { get; set; }
        public string Title { get; set; }
    }
    public class Price
    {
        public int M { get; set; }
        public int L { get; set; }

        // Add other price properties if needed (e.g., L, XL, etc.)
    }
    public class Course
    {
        public string Id { get; set; }
        public int Key { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string Method { get; set; }
        public List<OrderItem> Order { get; set; }
        public string SelectedRestaurant { get; set; }
        public int Total { get; set; }
        public string Time { get; set; }


    }

}