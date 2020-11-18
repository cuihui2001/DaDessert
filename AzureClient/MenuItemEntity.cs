using Azure;
using Azure.Data.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DaDessert.AzureClient
{
    public class MenuItemEntity : ITableEntity
    {
        public string PartitionKey { get; set; }

        public string RowKey { get; set; }

        public DateTimeOffset? Timestamp { get; set; }

        public ETag ETag { get; set; }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Ingredient { get; set; }

        public int Calories { get; set; }

        public string ImageSrc { get; set; }

        public double Price { get; set; }

        public double SalePrice { get; set; }

        public string MainCategory { get; set; }

        public string SubCategory { get; set; }

        public bool IsTrending { get; set; }

        public bool IsOnSale { get; set; }

        public bool IsEnable { get; set; }
    }
}
