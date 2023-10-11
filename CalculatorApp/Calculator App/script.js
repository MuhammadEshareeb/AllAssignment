// alert("Salam")
var display = document.getElementById("display");
var memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        var result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function clearAll() {
    display.value = "";
    memory = 0;
}

function performMemoryOperation(operation) {
    switch (operation) {
        case "M+":
            memory += parseFloat(display.value);
            break;
        case "M-":
            memory -= parseFloat(display.value);
            break;
        case "MR":
            display.value = memory;
            break;
        case "MC":
            memory = 0;
            break;
    }
}

function performTrigonometricFunction(func) {
    var angle = parseFloat(display.value);
    var result;
    if (func === "sin") {
        result = Math.sin(angle);
    } else if (func === "cos") {
        result = Math.cos(angle);
    } else if (func === "tan") {
        result = Math.tan(angle);
    }
    display.value = result;
}
document.addEventListener("keydown", function (event) {
    var key = event.key;
    if (/[0-9+\-*/.=()]|Enter|Backspace|Delete|Escape|s|c|t|m/.test(key)) {
        event.preventDefault();

        if (key === "Enter" || key === "=") {
            calculateResult();
        } else if (key === "Escape") {
            clearDisplay();
        } else if (key === "Backspace" || key === "Delete") {
            display.value = display.value.slice(0, -1);
        } else if (key === "s" || key === "c" || key === "t") {
            performTrigonometricFunction(key);
        } else if (key === "m") {
            var memoryOperation = prompt("Enter memory operation (M+, M-, MR, MC):");
            performMemoryOperation(memoryOperation);
        } else if (key === "a") { 
            clearAll();
        } else {
            appendToDisplay(key);
        }
    }
});
