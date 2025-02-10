let cart = [];

const products = {
  mobiles: [
    { name: "iPhone 13", price: 69999, image: "iphone.jpg" },
    { name: "Samsung S24 Ultra", price: 64999, image: "samsung.jpg" },
    { name: "OnePlus 9", price: 49999, image: "oneplus.jpg" },
    { name: "Xiaomi Mi 11", price: 39999, image: "xiaomi.jpg" },
    { name: "Realme GT", price: 29999, image: "realme.jpg" },
    { name: "Google Pixel 6", price: 55999, image: "pixel.jpg" },
    { name: "Vivo X70", price: 42999, image: "vivox70.jpg" },
    { name: "Oppo Reno 6", price: 37999, image: "opporeno6.jpg" },
    { name: "Asus ROG Phone 5", price: 69999, image: "rogphone5.jpg" },
    { name: "Nokia X20", price: 29999, image: "nokiax20.jpg" }


  ],
  laptops: [
    { name: "MacBook Air", price: 99999, image: "macbook.jpg" },
    { name: "Dell XPS 13", price: 85999, image: "dellxps.jpg" },
    { name: "HP Spectre x360", price: 79999, image: "hpspectre.jpg" },
    { name: "Lenovo ThinkPad", price: 74999, image: "thinkpad.jpg" },
    { name: "ASUS ZenBook", price: 67999, image: "zenbook.jpg" },
    { name: "Acer Swift 5", price: 62999, image: "swift5.jpg" },
    { name: "Microsoft Surface Laptop 4", price: 89999, image: "surface4.jpg" },
    { name: "Razer Blade 15", price: 149999, image: "razerblade15.jpg" },
    { name: "MSI Stealth 15M", price: 129999, image: "msi15m.jpg" },
    { name: "LG Gram 17", price: 114999, image: "lggram17.jpg" }
  

  ],
  accessories: [
    { name: "Wireless Earbuds", price: 4999, image: "earbuds.jpg" },
    { name: "Smartwatch", price: 7999, image: "smartwatch.jpg" },
    { name: "Gaming Mouse", price: 2999, image: "mouse.jpg" },
    { name: "Mechanical Keyboard", price: 5999, image: "keyboard.jpg" },
    { name: "Bluetooth Speaker", price: 6999, image: "speaker.jpg" },
    { name: "Power Bank", price: 3999, image: "powerbank.jpg" }, 
    { name: "VR Headset", price: 14999, image: "vrheadset.jpg" },
    { name: "External Hard Drive", price: 6999, image: "harddrive.jpg" },
    { name: "USB-C Hub", price: 2499, image: "usbhub.jpg" },
    { name: "Portable SSD", price: 8999, image: "ssd.jpg" },
  ]
};

// Show selected category
function showCategory(category) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products[category].forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });
}

// Add to cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let cartTotal = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(itemElement);
    cartTotal += item.price * item.quantity;
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);
  cartCount.textContent = cart.length;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Empty cart
document.getElementById("empty-cart").addEventListener("click", () => {
  cart = [];
  updateCartDisplay();
});

// Toggle cart visibility
document.getElementById("cart-icon").addEventListener("click", () => {
  document.getElementById("cart").classList.toggle("active");
});
