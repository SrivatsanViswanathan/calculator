/* Global Variables */

const calc = document.querySelector('.calculator');
const button = document.querySelectorAll('.button');
const border = document.querySelector('.border');
const displayText = document.querySelector('.text');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');

let num1 = '';
let num2 = '';
let numCheck = '';
let operation = '';
let operationDisplay = '';
let operationCalculation = 0;
let displayString = '';

buttonClicked();

// Calculator button is clicked
function buttonClicked() {
    button.forEach(element => {
        element.addEventListener('click', buttonsClicked);
    })
}

// Go to appropriate function depending on type of button clicked
function buttonsClicked(e) {
    if (num1 === '-_- Really Bruh -_-') {
        displayText.style.marginRight = '6%';
        displayText.style.marginLeft = '6%';
        displayText.style.textAlign = 'right';
        border.style.alignItems = 'flex-end';
        border.style.justifyContent = 'right';
        deleteAll();;
    } 
    if (e.target.classList.contains('delete-all')) {
        deleteAll();
    }
    else if (e.target.classList.contains('delete-recent')) {
        deleteRecent();
    }
    else if (e.target.classList.contains('number')) {
        addNumbers(e);
    }
    else if (e.target.classList.contains('operation')) {
        addOperation(e);
    }
    else if (e.target.classList.contains('calculate')) {
        calculate();
    }
    display(num1, num2, operationDisplay, operation);
}

// Start a new calculation fresh
function deleteAll() {
    num1 = num2 = '';
    operation = operationDisplay = '';
    displayString = '';
    displayText.textContent = '';
}

// Delete most recent button pressed by user
function deleteRecent() {
    if (num2 != '') {
        num2 = num2.slice(0, (num2.length - 1));
    }
    else if (operation != '') {
        operationDisplay = operationDisplay.slice(0, (operationDisplay.length - 1));
        operation = '';
    }
    else if (num1 != '') {
        num1 = num1.slice(0, (num1.length - 1));
    }
}

// Add numbers into number variables
function addNumbers(e) {
    if (operation === '') {
        if (e.target.value === '.') {
            if (!num1.includes('.')) {
                num1 = num1 + e.target.value;
            }
        }
        else {
            if (num1.includes('-') && e.target.value === '-') {
                num1 = num1.replace('-', '');
            }
            else if (!num1.includes('-') && e.target.value === '-') {
                num1 = '-' + num1;
            }
            else {
                num1 = num1 + e.target.value;
            }
        }
    }
    else {
        if (e.target.value === '.') {
            if (!num2.includes('.')) {
                num2 = num2 + e.target.value;
            }
        }
        else {
            if (num2.includes('-') && e.target.value === '-') {
                num2 = num2.replace('-', '');
            }
            else if (!num2.includes('-') && e.target.value === '-') {
                num2 = '-' + num2;
            }
            else {
                num2 = num2 + e.target.value;
            }
        }
    }
}

// Add operation to operation variable, calculate with operator if user wants to
function addOperation(e) {
    operationCalculation++;
    if (operationCalculation === 2) {
        calculate();
        operationCalculation = 1;
    }
    if (e.target.value === '.') {
    }
    if (num1 != '') {
        operation = e.target.value;
        operationDisplay = e.target.textContent;
    }
}

// Do math calculation
function calculate() {
    numCheck = operate(num1, num2, operation, operationDisplay);
    numCheck = numCheck.toString();
    if (numCheck === '-_- Really Bruh -_-') {
        displayText.style.marginRight = '0';
        displayText.style.marginLeft= '0';
        displayText.style.textAlign = '';
        border.style.alignItems = 'center';
        border.style.justifyContent = 'center';
        num1 = numCheck;
        num2 = '';
        operation = operationDisplay = '';
    }
    else if (numCheck.includes(' ')) {
        num2 = '';
    }
    else {
        num1 = numCheck;
        if (operationCalculation === 2) {
            num2 = '';
        }
        else {
            num2 = operation = operationDisplay = '';
        }
    }
}

// Calls appropriate math function
function operate(num1, num2, operation, operationSymbol) {
    let answer;
    if (num1 === '' || num2 === '' || operationSymbol === '') {
        answer = errorCheck(num1, num2, operationSymbol);
        return answer;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operation === 'add') {
        answer = add(num1, num2);
    }
    else if (operation === 'subtract') {
        answer = subtract(num1, num2);
    }
    else if (operation === 'multiply') {
        answer = multiply(num1, num2);
    }
    else if (operation === 'divide') {
        answer = divide(num1, num2);
    }
    else {
        answer = 'Error.';
    }
    return answer;
}

// Displays the math operation
function display(num1, num2, operation) {
    displayString = num1 + ' ' + operation + ' ' + num2;
    displayText.textContent = displayString;
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

// Error check for 
function errorCheck(num1, num2, operationSymbol) {
    if (num1 === '' && num2 === '' && operationSymbol === '') {
        answer = '';
    }
    else if (num2 === '' && operationSymbol === '') {
        answer = num1;
    }
    else if (num2 === '') {
        answer = num1 + ' ' + operationSymbol;
    }
    return answer;
}
