using Azure.Data.Tables;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DaDessert.AzureClient
{
    public class TableClient
    {
        private readonly ILogger _logger;
        private readonly TableServiceClient _serviceClient;

        public TableClient(ILogger<TableClient> logger, string connectionstring)
        {
            _logger = logger;
            _serviceClient = new TableServiceClient(connectionstring);
        }

        public async Task<bool> CreateTableIfNotExistsAsync(string tableName)
        {
            _logger.LogInformation("CreateTableIfNotExistsAsync: {TableName}", tableName);

            var response = await _serviceClient.CreateTableIfNotExistsAsync(tableName);
            if (response != null)
            {
                var table = response.Value;
                _logger.LogInformation("Table created: ({0})", table.TableName);
            }
            else
            {
                _logger.LogInformation("Table already created: {0}", tableName);
            }
          
            return true;
        }

        public async Task<IEnumerable<T>> RetrieveEntitiesAsync<T>(string tableName, Expression<Func<T, bool>> filter = null) where T : class, ITableEntity, new()
        {
            var tableClient = _serviceClient.GetTableClient(tableName);
            var query = filter == null ? tableClient.QueryAsync<T>() : tableClient.QueryAsync<T>(filter);
            
            var result = new List<T>();
            await foreach (var item in query)
            {
                result.Add(item);
            }

            return result;
        }
    }
}
