
//Interactive To-Do List
// Function to add a new task to the to-do list
function addTask() {
    // Get the text input from the user
    const taskText = document.getElementById("task-input").value;
    // Check if the input is empty or contains only whitespace
    if (taskText.trim() === "") return;
    // Create a new task element
    const taskItem = document.createElement("line");
    taskItem.innerHTML = `
        <input type="checkbox" class="complete-task"> ${taskText}
        <button class="delete-task">Delete</button>`;    
    // Add the new task to the to-do list
    document.getElementById("todo-list").appendChild(taskItem);
    // Clear the input field
    document.getElementById("task-input").value = "";
    // Add event listeners to the task for completing and deleting
    taskItem.querySelector(".complete-task").addEventListener("change", () => {
        // Check if the task is completed and apply styling
        if (taskItem.querySelector(".complete-task").checked) {
            taskItem.style.textDecoration = "line-through";
        } else {
            taskItem.style.textDecoration = "none";
        }
    });
    taskItem.querySelector(".delete-task").addEventListener("click", () => {
        // Remove the task when the delete button is clicked
        taskItem.remove();
    });
}
// Add event listeners for adding tasks when clicking the button or pressing Enter
document.getElementById("add-task").addEventListener("click", addTask);
document.getElementById("task-input").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});


//Animated Countdown Timer
// Initialize the time left in seconds
let timeLeft = 60;
// Function to update the countdown and redirect when time is up
function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message-cont");
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // Update the countdown display
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    // Redirect when the time is up
    if (timeLeft < 0) {
        clearInterval(timer);
        messageElement.textContent = "The time is out for purchase";
        setTimeout(function() {
            window.location.href = "Electrotech2.html";
        }, 2000);
    }
}
// Set up an interval to update the countdown every second
const timer = setInterval(updateCountdown, 1000);


//Form 
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const purchaseForm = document.querySelector("form");
    purchaseForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Display an alert indicating the purchase has been approved
        alert("Your purchase has been approved. Thank you for shopping with us!");
        // Redirect to a new page
        window.location.href = "Electrotech2.html";
    });
});


