function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round((a / b) * 10000) / 10000;
}

console.log(add(3, 6));
console.log(subtract(13, 6));
console.log(multiply(13, 6));
console.log(divide(13, 6));