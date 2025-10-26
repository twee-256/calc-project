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

        case '×':
            return multiply(a, b);

        case '÷':
            if (b == '0') {
                return 'Really???'
            }
            return divide(a, b);

    }
}

let display = document.querySelector('.display');
let num1 = '';
let num2 = '';
let operand = '';
let result = '';
let signs = ['+', '-', '×', '÷'];

function calc() {
    let digits = document.querySelectorAll('.digit');

    digits.forEach(digit => {
        digit.addEventListener('click', event => {
            const value = digit.value;
            let expr = display.textContent;
            if (value !== '=') {
                if (!signs.includes(value)) {
                    if (display.textContent == '0') {
                        display.textContent = '';
                    }
                    if (value != '.') {
                        display.textContent += value;
                    }
                }
            }
            if (value == '.' && !expr.includes(value)) {
                if (signs.includes(expr.slice(-1))) {
                    console.log(expr.slice(-1));
                    display.textContent += '0';
                    display.textContent += value;
                } else {
                    display.textContent += value;
                }
                // console.log(expr.slice(-1));
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
                        return;
                    }
                }
            } else if (signs.includes(value)) {
                if (expr.includes(value)) {
                    const array = expr.split(value);
                    num1 = array[0];
                    num2 = array[1];
                    if (num1 != '' && num2 != '') {
                        result = operate(value, num1, num2);
                        display.textContent = result + value;
                    }
                }
                if (!expr.includes(value)) {
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
                    display.textContent += value;
                }
                return;
            }
        });
    });
}

function backspace() {
    let bkSpace = document.querySelector('.bkSpace');
    bkSpace.addEventListener('click', event => {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === '') {
            display.textContent = '0';
        }
    })
}

function clear() {
    let clear = document.querySelector('.clear');
    clear.addEventListener('click', event => {
        display.textContent = '';
        if (display.textContent == '') {
            display.textContent = '0';
        }
    })
}

backspace();
calc();
clear();