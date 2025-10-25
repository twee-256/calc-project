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
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case '*':
            return multiply(a, b);

        case '/':
            return divide(a, b);

    }
}

let display = document.querySelector('.display');
let num1 = '';
let num2 = '';
let operand = '';
let result = '';
let signs = ['+', '-', '*', '/'];

function calc() {
    let digits = document.querySelectorAll('.digit');

    digits.forEach(digit => {
        digit.addEventListener('click', event => {
            const value = digit.value;
            let expr = display.textContent;
            if (value !== '=') {
                display.textContent += value;
            }
            if (value === '=') {
                for (let sign of signs) {
                    if (expr.includes(sign)) {
                        const array = expr.split(sign);
                        num1 = array[0];
                        num2 = array[1];
                        if (num1 != '' && num2 != '') {
                            result = operate(sign, num1, num2);
                            display.textContent = result;
                        }
                        return result;
                    }
                }
            } else if (signs.includes(value)) {
                for (let sign of signs) {
                    if (expr.includes(sign)) {
                        const array = expr.split(sign);
                        num1 = array[0];
                        num2 = array[1];
                        if (num1 != '' && num2 != '') {
                            result = operate(sign, num1, num2);
                            display.textContent = result + value;
                        }
                        return;
                    }
                }
            }
        });
    });
}

function clear() {
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', event => {
        display.textContent = '';
    })
}

calc();
// console.log(calc('2+2'));
clear();