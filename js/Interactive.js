//Interactive Elements: accordions
// Select all elements with the class 'accordion-button'
const accordionButtons = document.querySelectorAll('.accordion-button');
// Loop through each accordion button and add a click event listener
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked button
        button.classList.toggle('active');
        // Select the next sibling element (the answer) of the button
        const answer = button.nextElementSibling;
        // Toggle the display property of the answer between 'block' and 'none'
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


//Interactive Elements: animations
// Select the element with the ID 'animatedDiv'
const animatedDiv = document.getElementById("animatedDiv");
// Initialize the initial position to be outside the view
let position = -animatedDiv.offsetWidth;
// Function to move the animated div
function move() {
    animatedDiv.style.left = position + "px";
    position += 2;
    // Reset the position when it goes off the screen
    if (position > window.innerWidth) {
        position = -animatedDiv.offsetWidth;
    }
}
// Function to continuously animate the div
function animate() {
    requestAnimationFrame(animate);
    move();
}
// Start the animation loop
animate();


//Menu
// Wait for the document to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    // Add a click event listener to the navigation menu toggle button
    navbarToggler.addEventListener("click", function () {
        // Toggle the display style of the navigation menu
        if (navbarCollapse.style.display === "none" || navbarCollapse.style.display === "") {
            navbarCollapse.style.display = "block";
        } else {
            navbarCollapse.style.display = "none";
        }
    });
});


//Third Animation
const colors = ["red", "blue", "green", "orange", "purple"]; 
const logoElement = document.getElementById("electrotechLogo");
let currentIndex = 0;

setInterval(function () {
    logoElement.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}, 2000);
