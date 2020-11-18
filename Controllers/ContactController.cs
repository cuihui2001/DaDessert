using DaDessert.AzureClient;
using DaDessert.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace DaDessert.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;
        private readonly IAzureStore _azureStore;

        public ContactController(ILogger<ContactController> logger, IAzureStore azureStore)
        {
            _logger = logger;
            _azureStore = azureStore;
        }

        [HttpGet]
        public async Task<ContactInfo> Get()
        {
            var contactInfo = await _azureStore.GetContactInfo();

            return contactInfo;
        }
    }
}
