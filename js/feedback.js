
//User Feedback

// Trigger a confirmation prompt when the user tries to leave the page
window.onbeforeunload = function() {
  return "Can you assess whether the information was useful?";
};
// Define a function to show the feedback form
function showFeedbackForm() {
  // Display a confirmation dialog to ask the user for feedback
  const feedback = window.confirm("Can you assess whether the information was useful?"); 
  if (feedback) {
    // If the user confirms, ask them to rate the information
    const rating = window.prompt("Please rate the information from 1 (worst) to 5 (best):");   
    // Check if the rating is valid (between 1 and 5)
    if (rating >= 1 && rating <= 5) {
      alert("Thank you for your feedback. You rated it " + rating + " stars.");
    } else {
      // Display an alert for an invalid rating
      alert("Invalid rating. Please provide a rating between 1 and 5.");
    }
  } else {
    // If the user cancels feedback, display a thank you message
    alert("Thank you for visiting. You chose not to leave feedback.");
  }
}


// JavaScript function for rotating the social media icons
function rotateSocialMediaIcons() {
  const twitterIcon = document.getElementById("twitterIcon");
  const facebookIcon = document.getElementById("facebookIcon");
  const instagramIcon = document.getElementById("instagramIcon");
  let rotation = 0; // Initial rotation angle

  function animate() {
      rotation += 2; // Adjust the step value for speed
      twitterIcon.style.transform = `rotate(${rotation}deg)`;
      facebookIcon.style.transform = `rotate(${rotation}deg)`;
      instagramIcon.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(animate);
  }

  animate();
}

// Call the rotation animation function for all social media icons when the page loads
window.addEventListener("load", rotateSocialMediaIcons);


//Keypress
  // Function to scroll the page to the top
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the "Back to Top" button when the user scrolls down
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTopButton');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the "Back to Top" button is clicked
document.getElementById('backToTopButton').addEventListener('click', scrollToTop);

// Detect "Home" keypress to scroll to the top
document.addEventListener('keydown', function (event) {
    if (event.key === 'Home') {
        scrollToTop();
    }
});
