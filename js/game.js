document.addEventListener("DOMContentLoaded", function() {
    let success = false;
    let wordsDroppedCount = 0;

    const words = shuffle([
        { word: "Smartphone", image: "pic/photo_5350648001292521911_y.jpg" },
        { word: "Headphones", image: "pic/photo_5350648001292521929_x.jpg" },
        { word: "Laptop", image: "pic/photo_5350648001292521935_x.jpg" }
    ]);
    
    const imagesContainer = document.getElementById("images-container");
    const wordsContainer = document.getElementById("words-container");

    words.forEach(item => {
        const imageDiv = document.createElement("div");
        imageDiv.className = "image";
        imageDiv.setAttribute("data-word", item.word);
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.word;
        imageDiv.appendChild(image);
        imagesContainer.appendChild(imageDiv);

        const wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.setAttribute("data-target", item.word);
        wordDiv.innerText = item.word;
        wordsContainer.appendChild(wordDiv);
    });

    wordsContainer.querySelectorAll(".word").forEach(word => {
        word.draggable = true;

        word.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("text/plain", event.target.innerText);
        });
    });

    imagesContainer.querySelectorAll(".image").forEach(image => {
        image.addEventListener("dragover", function(event) {
            event.preventDefault();
        });

        image.addEventListener("drop", function(event) {
            event.preventDefault();
            const draggedWord = event.dataTransfer.getData("text/plain");
            const targetWord = image.getAttribute("data-word");

            if (draggedWord === targetWord && !image.classList.contains("matched")) {
                image.style.backgroundColor = "green";
                image.classList.add("matched");
                wordsDroppedCount++;

                if (wordsDroppedCount === words.length) {
                    success = true;
                }
            }
        });
    });

    const verifyButton = document.getElementById("verify-button");
verifyButton.addEventListener("click", function() {
        if (success) {
     
sessionStorage.setItem('captchaPassed', 'true');



            window.location.href = "Electrotech2.html";
        } else {
            alert("Please make sure all words are dragged to the correct images.");
        }
    });
function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});