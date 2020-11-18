using DaDessert.AzureClient;

namespace DaDessert.Models
{
    public class Item
    {
        public Item(MenuItemEntity entity)
        {
            Name = entity.Name;
            Description = entity.Description;
            Ingredient = entity.Ingredient;
            Calories = entity.Calories;
            Price = entity.Price;
            MainCategory = entity.MainCategory;
            SubCategory = entity.SubCategory;
        }

        public Item()
        {
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Ingredient { get; set; }

        public int Calories { get; set; }

        public string ImageSrc { get; set; } = "images/TestDrink.PNG";

        public double Price { get; set; }

        public double SalePrice { get; set; }

        public string MainCategory { get; set; }
        
        public string SubCategory { get; set; }

        public bool IsTrending { get; set; }

        public bool IsOnSale { get; set; }

        public bool IsEnable { get; set; }
    }
}
