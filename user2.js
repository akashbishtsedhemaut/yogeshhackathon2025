// Sample menu data
const menuItems = [
    { id: 1, name: "Paneer roll", price: 45, category: "Indian", image: "https://th.bing.com/th/id/OIP.evDDTSpKPo0XdBV8pepQ0wHaE8" },
    { id: 2, name: "Patties", price: 12, category: "Fast food", image: "https://th.bing.com/th/id/R.57952d51a8151fc44ebe7051e5dd3385?rik=9%2bx9g8us8CWUhQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5ea3b22556f3d073f3d9cae4%2f5ed45891ff1f544b3b5a1706%2f60832ec11bd268604e27e7c3%2f1631048808494%2fScreen%2bShot%2b2021-04-26%2bat%2b6.35.38%2bAM.png%3fformat%3d1500w&ehk=gGdNGAFHqy06hWHWWaPItQhl6x5NwuSMgCcltXZC1d0%3d&risl=&pid=ImgRaw&r=0" },
    // Add other menu items here...
  ];
  
  // Display Menu
  function displayMenu(items) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = items
      .map(
        (item) => `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="details">
            <h3>${item.name}</h3>
            <p>${item.category} - ₹${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
          </div>
        </div>
      `
      )
      .join('');
  }
  
  // Scroll Event for Dynamic Background
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const scrollPercentage = scrollY / (document.body.scrollHeight - window.innerHeight);
  
    // Update background gradient
    const backgroundContainer = document.getElementById('background-container');
    const color1 = `rgba(248, 249, 250, ${1 - scrollPercentage})`;
    const color2 = `rgba(40, 167, 69, ${scrollPercentage})`;
    backgroundContainer.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
  });
  
  // Initialize
  displayMenu(menuItems);