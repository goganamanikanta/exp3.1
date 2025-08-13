let cart = [];
const cartButton = document.getElementById("cart-button");
const cartCount = document.getElementById("cart-count");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    const productName = e.target.getAttribute("data-product");
    const productPrice = parseFloat(e.target.getAttribute("data-price"));
    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartCount();
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

document.getElementById("checkout-button").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add some items before checking out.");
  } else {
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    alert(`Total: $${total.toFixed(2)}\nProceed to checkout.`);
  }
});
