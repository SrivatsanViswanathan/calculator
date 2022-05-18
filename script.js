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
    else if (operator == 'divide') {
        answer = divide(num1, num2);
    }
    else {
        answer = 'Error.';
    }
    return answer;
}

// Math functions
function add(num1, num2) {
    answer = num1 + num2;
    return answer;
}

function subtract(num1, num2) {
    answer = num1 - num2;
    return answer;
}

function multiply(num1, num2) {
    answer = num1 * num2;
    return answer;
}

function divide(num1, num2) {
    if (num2 === 0) {
        answer = '-_- Really Bruh -_-';
        return answer;
    }
    answer = num1 / num2;
    return answer;
}

let operator = 'divide';
let num1 = 2.5;
let num2 = 0;
const result = operate(operator, num1, num2);
console.log(result);