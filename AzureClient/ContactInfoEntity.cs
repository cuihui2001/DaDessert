using Azure;
using Azure.Data.Tables;
using System;

namespace DaDessert.AzureClient
{
    public class ContactInfoEntity : ITableEntity
    {
        public string PartitionKey { get; set; }

        public string RowKey { get; set; }

        public DateTimeOffset? Timestamp { get; set; }

        public ETag ETag { get; set; }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        public bool IsEnable { get; set; }
    }
}
