// Hämta element från DOM
const addToCartButtons = document.querySelectorAll('.button');
const cartContainer = document.querySelector('.cart-container');

// Kolla om det finns sparade produkter i LocalStorage
let cartItems = localStorage.getItem('cartItems');
if (!cartItems) {
  cartItems = [];
} else {
  cartItems = JSON.parse(cartItems);
  showCartItems();
}

// Lägg till en produkt i varukorgen
function addToCart(productName, price) {
  const product = { name: productName, price: price };
  cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  showCartItems();
}

// Visa produkterna i varukorgen
function showCartItems() {
  cartContainer.innerHTML = '';

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const product = cartItems[i];
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <p>${product.name}</p>
      <p>${product.price} SEK</p>
    `;
    cartContainer.appendChild(cartItem);

    totalPrice += product.price;
  }

  const totalElement = document.createElement('p');
  totalElement.textContent = `Totalt: ${totalPrice.toFixed(2)} SEK`;
  cartContainer.appendChild(totalElement);
}
