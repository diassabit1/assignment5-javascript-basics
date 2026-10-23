
let changeTextButton = document.getElementById("changeText");
let paragraph = document.getElementById("text");

changeTextButton.addEventListener("click", function() {
    paragraph.textContent = "The text has been changed!";
});

let changeColorButton = document.getElementById("changeColor");
let changeSizeButton = document.getElementById("changeSize");
let colorBox = document.getElementById("colorBox");
let boxText = document.getElementById("boxText");

changeColorButton.addEventListener("click", function() {
    colorBox.style.backgroundColor = "lightblue";
});

changeSizeButton.addEventListener("click", function() {
    boxText.style.fontSize = "24px";
});

let addButton = document.getElementById("addItem");
let removeButton = document.getElementById("removeItem");
let itemList = document.getElementById("itemList");
let itemCount = 2;

addButton.addEventListener("click", function() {
    itemCount = itemList.children.length + 1;

    let newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;

    itemList.appendChild(newItem);
});

removeButton.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
    }
});
