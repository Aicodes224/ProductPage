
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButton = document.querySelector(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const viewCartButton = document.getElementById("view-cart-button");
    const cartModal = document.getElementById("cart-modal");
    const closeCartModalButton = document.getElementById("close-cart-modal");
    const cartModalList = document.querySelector("#cart-modal ul");
  
    addToCartButton.addEventListener("click", function () {
      const title = document.querySelector(".product-details h1").textContent;
      const price = document.querySelector("#ok li:first-child").textContent;
  
      const cartItem = document.createElement("li");
      cartItem.textContent = title + '-' + price;
  
      cartItemsList.appendChild(cartItem); // Add the item to the main cart
    });
  
    viewCartButton.addEventListener("click", function () {
      // Show the cart modal when "View Cart" is clicked
      cartModal.style.display = "block";
  
      // Clear the cart modal list
      while (cartModalList.firstChild) {
        cartModalList.removeChild(cartModalList.firstChild);
      }
  
      // Copy items from the main cart list to the cart modal list
      const mainCartItems = cartItemsList.querySelectorAll("li");
      mainCartItems.forEach(function (mainCartItem) {
        const cartItemClone = mainCartItem.cloneNode(true);
        cartModalList.appendChild(cartItemClone);
      });
    });
  
    closeCartModalButton.addEventListener("click", function () {
      // Close the cart modal when the close button is clicked
      cartModal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      // Close the cart modal if the user clicks outside of it
      if (event.target === cartModal) {
        cartModal.style.display = "none";
      }
    });
  });
  