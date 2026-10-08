// 1. Even / Odd Checker

function checkEvenOdd() {

    const input = document.getElementById("numberInput");
    const result = document.getElementById("result");

    if (input.value === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    const number = Number(input.value);

    if (number % 2 === 0) {
        result.textContent = number + " is an Even Number.";
    } else {
        result.textContent = number + " is an Odd Number.";
    }
}


// 2. Button Color Changer

function changeColor() {

    const button = document.getElementById("colorButton");

    const colors = [
        "#ff5722",
        "#007bff",
        "#28a745",
        "#6f42c1",
        "#e83e8c"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    button.style.backgroundColor = randomColor;
}


// 3. Calculator

function appendValue(value) {

    document.getElementById("display").value += value;
}


function clearDisplay() {

    document.getElementById("display").value = "";
}


function deleteLast() {

    const display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}


function calculate() {

    const display = document.getElementById("display");

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } catch {

        display.value = "Error";
    }
}


// 4. Today's Date

function showDate() {

    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        today.toLocaleDateString("en-IN", options);
}

showDate();