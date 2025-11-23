let display = document.getElementById("display");

function insert(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let expression = display.value;

    expression = expression.replace("√", "Math.sqrt");
    expression = expression.replace("^", "**");
    expression = expression.replace(/sin/g, "Math.sin");
    expression = expression.replace(/cos/g, "Math.cos");
    expression = expression.replace(/tan/g, "Math.tan");
    expression = expression.replace(/log/g, "Math.log10");

    try {
        display.value = eval(expression);
    } catch (e) {
        display.value = "Error";
    }
}
