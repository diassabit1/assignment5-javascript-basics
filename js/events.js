
let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "lightgreen";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "lightgray";
});

let userInput = document.getElementById("userInput");
let output = document.getElementById("output");

userInput.addEventListener("keyup", function() {
    output.textContent = "You typed: " + userInput.value;
});
