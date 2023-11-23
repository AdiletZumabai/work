//Event Listener:mouseover
// Get all the image elements in the product-list and product-categories sections
const productImages = document.querySelectorAll('.product-list img, .product-categories img');

// Define the function to run when the mouse is over an image
function handleMouseOver(event) {
  // Change the image's opacity when the mouse is over it
  event.target.style.opacity = '0.7';
}

// Define the function to run when the mouse leaves an image
function handleMouseOut(event) {
  // Reset the image's opacity when the mouse leaves
  event.target.style.opacity = '1';
}

// Add the "mouseover" event listener to each image
productImages.forEach((image) => {
  image.addEventListener('mouseover', handleMouseOver);
  image.addEventListener('mouseout', handleMouseOut);
});



