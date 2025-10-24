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

function operate(operator, a, b) {
    // operator = '';
    switch (operator) {
        case '+':
            add(a, b);
            console.log(add(a, b));
            break;

        case '-':
            subtract(a, b);
            console.log(subtract(a, b))
            break;

        case '*':
            multiply(a, b);
            console.log(multiply(a, b))
            break;

        case '/':
            divide(a, b);
            console.log(divide(a, b))
            break;
    }
}

let display = document.querySelector('.display');