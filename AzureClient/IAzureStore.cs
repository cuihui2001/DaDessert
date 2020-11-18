using DaDessert.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DaDessert.AzureClient
{
    public interface IAzureStore
    {
        Task<IEnumerable<Item>> GetMenuItems();

        Task<IEnumerable<Item>> GetTrendingItems();

        Task<IEnumerable<Item>> GetOnSaleItems();

        Task<ContactInfo> GetContactInfo();
    }
}
