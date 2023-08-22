const dataStructure = {
    categories: {
      category1: {
        name: 'Category 1',
        items: ['item1', 'item2'],
        subcategories: [],
        visibleTo: {
          customer1: true,
          customer2: false,
          customer3: true,
        },
      },
      category2: {
        name: 'Category 2',
        items: ['item2', 'item3'],
        subcategories: [],
        visibleTo: {
          customer1: true,
          customer2: true,
          customer3: true,
        },
      },
    },
    items: {
      item1: {
        name: 'Item 1',
        categories: ['category1'],
      },
      item2: {
        name: 'Item 2',
        categories: ['category1', 'category2'],
      },
      item3: {
        name: 'Item 3',
        categories: ['category2'],
      },
    },
    customers: {
      customer1: {
        id: 1,
        name: 'Customer 1',
        visibleCategories: ['category1'],
      },
      customer2: {
        id: 2,
        name: 'Customer 2',
        visibleCategories: ['category2'],
      },
      customer3: {
        id:3,
        name: 'Customer 3',
        visibleCategories: ['category1','category2'],
      },
      
    },
};

function getVisibleItemsByCustomer(rootObject) {
    const result = []; 
    
    for (const customerId in rootObject.customers) {
      const customer = rootObject.customers[customerId];
      const visibleItems = new Set(); 
  
      
      for (const categoryName of customer.visibleCategories) {
        const category = rootObject.categories[categoryName];
  
        
        for (const itemName of category.items) {
          visibleItems.add(itemName);
        }
  
       
        for (const subcategoryName of category.subcategories) {
          const subcategory = rootObject.categories[subcategoryName];
  
          for (const itemName of subcategory.items) {
            visibleItems.add(itemName);
          }
        }
      }
  
      
      result.push({
        customer: customer.name,
        visibleItems: Array.from(visibleItems).map(itemName => rootObject.items[itemName].name),
      });
    }
  
    return result;
}
  
const visibleItemsByCustomer = getVisibleItemsByCustomer(dataStructure);
console.log(visibleItemsByCustomer);  
