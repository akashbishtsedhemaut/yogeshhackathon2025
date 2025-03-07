// Sample orders data (to be replaced with Firebase later)
let orders = [
    {
      id: 1,
      items: ["Paneer Roll", "Patties"],
      status: "Received", // Can be "Received", "Preparing", or "Ready"
    },
    {
      id: 2,
      items: ["Pizza", "Cold Coffee"],
      status: "Received",
    },
    {
      id: 3,
      items: ["Burger", "Oreo Shake"],
      status: "Received",
    },
  ];
  
  // DOM Elements
  const orderList = document.getElementById('order-list');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  // Display Orders
  function displayOrders() {
    orderList.innerHTML = orders
      .map(
        (order) => `
        <div class="order-card">
          <h3>Order #${order.id}</h3>
          <p>Items: ${order.items.join(", ")}</p>
          <p>Status: <span class="status">${order.status}</span></p>
          <div class="mt-4">
            ${order.status === "Received"
              ? `<button onclick="updateStatus(${order.id}, 'Preparing')" class="preparing">Mark as Preparing</button>`
              : order.status === "Preparing"
              ? `<button onclick="updateStatus(${order.id}, 'Ready')" class="ready">Mark as Ready</button>`
              : `<span class="text-green-600">Order Ready</span>`
            }
          </div>
        </div>
      `
      )
      .join('');
  }
  
  // Update Order Status
  function updateStatus(orderId, newStatus) {
    const order = orders.find((order) => order.id === orderId);
    if (order) {
      order.status = newStatus;
      displayOrders();
      showToast(`Order #${orderId} status updated to ${newStatus}.`);
    }
  }
  
  // Show Toast Notification
  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  }
  
  // Initialize
  displayOrders();