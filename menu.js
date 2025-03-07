// Sample menu data with Unsplash images
const menuItems = [
    { id: 1, name: "Paneer roll", price: 45, category: "Indian", image: "https://th.bing.com/th/id/OIP.evDDTSpKPo0XdBV8pepQ0wHaE8" },
    
    { id: 2, name: "Patties", price: 12, category: "Fast food", image:"https://th.bing.com/th/id/R.57952d51a8151fc44ebe7051e5dd3385?rik=9%2bx9g8us8CWUhQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5ea3b22556f3d073f3d9cae4%2f5ed45891ff1f544b3b5a1706%2f60832ec11bd268604e27e7c3%2f1631048808494%2fScreen%2bShot%2b2021-04-26%2bat%2b6.35.38%2bAM.png%3fformat%3d1500w&ehk=gGdNGAFHqy06hWHWWaPItQhl6x5NwuSMgCcltXZC1d0%3d&risl=&pid=ImgRaw&r=0"  },
    
    { id: 3, name: "Pasta", price: 45, category: "Fast food", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
    { id: 4, name: "Tea", price: 10, category: "Bevarage", image: "https://images.unsplash.com/photo-1630748662359-40a2105640c7" },
    { id: 5, name: "Paneer roll", price: 45, category: "Fast Food", image:"https://th.bing.com/th/id/OIP.evDDTSpKPo0XdBV8pepQ0wHaE8" },

    { id: 6, name: "Cold Coffe", price: 50, category: "Beverage", image:"https://www.whiskaffair.com/wp-content/uploads/2021/03/Cold-Coffee-2-1.jpg" },
    { id: 7, name: "Red sauce pasta", price: 45, category: "Fast Food", image:" https://www.recipetineats.com/tachyon/2023/10/Penne-Arrabbiata-4.jpg?resize=500%2C500"  },
    { id: 7, name: "Sandwich", price: 35, category: "Fast Food", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8nGq7473Oak20M1qQ1pU_1-vg0JsKO0p8A&s  "},
    { id: 8, name: "Lassi", price: 40, category: "Beverage", image:"https://th.bing.com/th/id/OIP.pDQTDCUEs41ZNnl0KdoLvQHaLH?rs=1&pid=ImgDetMain" },
    { id: 9, name: "Burger", price: 45, category: "Fast Food", image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8"},
    { id: 10, name: "Blueberry Shake", price: 50, category: "Beverage", image:"https://www.dinneratthezoo.com/wp-content/uploads/2018/05/blueberry-smoothie-5.jpg" },
    { id: 11, name: "Blue Lagoon", price: 45, category: "Beverage", image: "https://savortheflavour.com/wp-content/uploads/2020/07/Blue-Lagoon-Mocktail-Process-5.jpg" },
    { id: 12, name: "Mojito", price: 45, category: "Beverage", image: "https://th.bing.com/th/id/OIP.dOH2jQQL-QOg9LE6pqbo9AHaJ4?rs=1&pid=ImgDetMain" },
    { id: 13, name: "Ice Tea", price: 45, category: "Beverage", image: "https://th.bing.com/th/id/OIP.udjnY8S_xt9bc_kReGa1IgHaFf?rs=1&pid=ImgDetMain" },
    { id: 13, name: "Ice Tea", price: 45, category: "Beverage", image: "https://th.bing.com/th/id/OIP.udjnY8S_xt9bc_kReGa1IgHaFf?rs=1&pid=ImgDetMain" },

    { id: 14, name: "Strawberry Soda", price: 45, category: "Beverage", image: "https://mocktail.net/wp-content/uploads/2022/06/Homemade-Strawberry-Soda_11ig.jpg" },
    { id: 15, name: "Oreo Shake", price: 50, category: "Beverage", image: "https://th.bing.com/th/id/OIP.lq605u9Yd9p-pjwEbkE79QHaLH?rs=1&pid=ImgDetMain" },
];
  
  // Cart and Order History
  let cart = [];
  let orderHistory = [];
  
  // DOM Elements
  const menuList = document.getElementById('menu-list');
  const cartList = document.getElementById('cart-list');
  const statusMessage = document.getElementById('status-message');
  const orderHistoryList = document.getElementById('order-history');
  const searchInput = document.getElementById('search');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  // Display Menu
// Display Menu
function displayMenu(items) {
  const fastFoodList = document.getElementById('fastfood-list');
  const beverageList = document.getElementById('beverage-list');

  // Clear existing content
  fastFoodList.innerHTML = '';
  beverageList.innerHTML = '';

  items.forEach((item) => {
    const card = `
      <div class="menu-item bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img src="${item.image}" alt="${item.name}" class="food-image w-full h-40 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-lg font-semibold">${item.name}</h3>
          <p class="text-gray-600">${item.category} - ₹${item.price}</p>
          <button onclick="addToCart(${item.id})" class="w-full bg-green-600 text-white py-1 px-3 rounded-lg mt-2 hover:bg-green-700 transition duration-300">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    `;
  
      // Add to Fast Food or Beverage section based on category
      if (item.category.toLowerCase() === "fast food") {
        fastFoodList.innerHTML += card;
      } else if (item.category.toLowerCase() === "beverage") {
        beverageList.innerHTML += card;
      }
    });
  }