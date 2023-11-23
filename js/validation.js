//Form Validation
//Signup
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the signup form, password inputs, and error message div
    const signupForm = document.getElementById("signupForm");
    const passwordInput = signupForm.querySelector("#password");
    const repeatPasswordInput = signupForm.querySelector("#repeatPassword");
    const errorDiv = document.getElementById("error");
    // Check if the signup form exists on the page
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const usernameInput = signupForm.querySelector("#username");
            // Check if username or password fields are empty
            if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
                alert("Please fill out all required fields.");
            } else if (passwordInput.value.length < 6) {
                // Check if the password is less than 6 characters
                alert("The password must contain at least 6 characters.");
            } else if (passwordInput.value !== repeatPasswordInput.value) {
                // Check if the passwords do not match
                errorDiv.textContent = "Password mismatch!";
            } else {
                // Clear any previous error message
                errorDiv.textContent = "";
                // Alert that registration was successful and redirect
                alert("Registration completed successfully!");
                window.location.href = "Electrotech2.html";
            }
        });
    }
});


//Signin
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the signin form
    const signinForm = document.getElementById("signinForm");
    // Check if the signin form exists on the page
    if (signinForm) {
        signinForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const usernameInput = signinForm.querySelector("#username");
            const passwordInput = signinForm.querySelector("#password");
            // Check if username or password fields are empty
            if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
                alert("Please fill out all required fields.");
            } else {
                // Check if the password is less than 6 characters
                if (passwordInput.value.length < 6) {
                    alert("The password must contain at least 6 characters.");
                } else {
                    // Alert that the signin was successful and redirect
                    alert("Signin completed successfully!");
                    window.location.href = "Electrotech2.html";
                }
            }
        });
    }
});
