// Calls appropriate math function
function operate(operator, num1, num2) {
    let answer;
    if (operator === 'add') {
        answer = add(num1, num2);
    }
    else if (operator === 'subtract') {
        answer = subtract(num1, num2);
    }
    else if (operator === 'multiply') {
        answer = multiply(num1, num2);
    }
    else if (operator === 'divide') {
        answer = divide(num1, num2);
    }
    else if (operator === 'power') {
        answer = power(num1, num2);
    }
    else {
        answer = 'Error.';
    }
    return answer;
}

// Math functions
function add(num1, num2) {
    let answer = num1 + num2;
    return answer;
}

function subtract(num1, num2) {
    let answer = num1 - num2;
    return answer;
}

function multiply(num1, num2) {
    let answer = num1 * num2;
    return answer;
}

function divide(num1, num2) {
    if (num2 === 0) {
        let answer = '-_- Really Bruh -_-';
        return answer;
    }
    let answer = num1 / num2;
    return answer;
}

function power(num1, num2) {
    let answer = 1;
    for (let i = 0; i < num2; i++) {
        answer = answer*num1;
    }
    return answer;
}

let operator = 'power';
let num1 = 10;
let num2 = 0;
const result = operate(operator, num1, num2);
console.log(result);