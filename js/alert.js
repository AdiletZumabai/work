
// Get a reference to the HTML form element with the ID 'contactForm'
const form = document.getElementById('contactForm');
// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', function (event) {
    // Prevent the default behavior of the form, which is to submit and reload the page
    event.preventDefault();
    // Display an alert message indicating the form was submitted successfully
    alert('Form submitted successfully!');
    // Reset the form, clearing its input fields
    form.reset();
});


