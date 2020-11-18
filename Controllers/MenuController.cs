using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DaDessert.AzureClient;
using DaDessert.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DaDessert.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenuController : ControllerBase
    {
        private readonly ILogger<MenuController> _logger;
        private readonly IAzureStore _azureStore;

        public MenuController(ILogger<MenuController> logger, IAzureStore azureStore)
        {
            _logger = logger;
            _azureStore = azureStore;
        }

        [HttpGet("full")]
        public async Task<IEnumerable<Item>> GetMenu()
        {
            var items = await _azureStore.GetMenuItems();

            return items;
        }

        [HttpGet("trending")]
        public async Task<IEnumerable<Item>> GetTrending()
        {
            var items = await _azureStore.GetTrendingItems();

            return items;
        }

        [HttpGet("onsale")]
        public async Task<IEnumerable<Item>> GetOnSale()
        {
            var items = await _azureStore.GetOnSaleItems();

            return items;
        }
    }
}
