using DaDessert.AzureClient;

namespace DaDessert.Models
{
    public class ContactInfo
    {
        public ContactInfo(ContactInfoEntity entity)
        {
            Name = entity.Name;
            Phone = entity.Phone;
            Address = entity.Address;
            Email = entity.Email;
        }

        public ContactInfo()
        {
        }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }
    }
}
