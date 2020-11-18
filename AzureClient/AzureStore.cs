using DaDessert.Models;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DaDessert.AzureClient
{
    public class AzureStore: IAzureStore
    {
        private const string MenuTableName = "Menu";
        private const string LocationTableName = "Location";

        private readonly ILogger<AzureStore> _logger;
        private readonly TableClient _tableClient;
        private readonly StorageOption _option;

        public AzureStore(ILoggerFactory loggerFactory, IOptions<StorageOption> option)
        {
            _logger = loggerFactory.CreateLogger<AzureStore>();
            _option = option.Value;

            // Init table client
            _tableClient = new TableClient(loggerFactory.CreateLogger<TableClient>(), _option.ConnectionString);
            _tableClient.CreateTableIfNotExistsAsync(MenuTableName).GetAwaiter().GetResult();
        }

        public async Task<IEnumerable<Item>> GetMenuItems()
        {
            var menuEntities = await _tableClient.RetrieveEntitiesAsync<MenuItemEntity>(MenuTableName);
            _logger.LogInformation("Retrieved menu items: {0}", menuEntities.Count());

            return menuEntities.Select(e => new Item(e));
        }

        public async Task<IEnumerable<Item>> GetTrendingItems()
        {
            var trendingEntities = await _tableClient.RetrieveEntitiesAsync<MenuItemEntity>(MenuTableName, e => e.IsTrending);
            _logger.LogInformation("Retrieved Trending items: {0}", trendingEntities.Count());

            return trendingEntities.Select(e => new Item(e));
        }

        public async Task<IEnumerable<Item>> GetOnSaleItems()
        {
            var onSaleEntities = await _tableClient.RetrieveEntitiesAsync<MenuItemEntity>(MenuTableName, e => e.IsOnSale == true);
            _logger.LogInformation("Retrieved OnSale items: {0}", onSaleEntities.Count());

            return onSaleEntities.Select(e => new Item(e));
        }

        public async Task<ContactInfo> GetContactInfo()
        {
            var locations = await _tableClient.RetrieveEntitiesAsync<ContactInfoEntity>(LocationTableName);
            var contactInfoEntity = locations.FirstOrDefault();

            return new ContactInfo(contactInfoEntity);
        }
    }
}
