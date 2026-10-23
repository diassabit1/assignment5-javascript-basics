
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    let a = Number(num1.value);
    let b = Number(num2.value);
    let answer;

    if (operation === "+") {
        answer = a + b;
    } else if (operation === "-") {
        answer = a - b;
    } else if (operation === "*") {
        answer = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
}

document.getElementById("add").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("divide").addEventListener("click", function() {
    calculate("/");
});
