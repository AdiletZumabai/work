
//Sound 
// Function to play the audio after a delay
function playSoundAfterDelay() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

// Set a timer to play the audio when the page loads (e.g., after 2 seconds)
window.addEventListener("load", function() {
    setTimeout(playSoundAfterDelay, 2000); // 2000 milliseconds (2 seconds)
});