/* Global Variables */

const button = document.querySelectorAll('.button');
const displayText = document.querySelector('#display');

let num1 = '';
let num2 = '';
let operator = '';
let operation = '';
let display = '';

getValues();

/* Get button values */
function getValues() {
    let counter1 = false;
    let counter2 = true;
    let counter3 = false;
    button.forEach(element => {
        element.addEventListener('click', function (e) {
            num1 = num1.toString();
            num2 = num2.toString();
            display = display.toString();
            if (e.target.classList.contains('delete-all')) {
                num1 = num2 = operator = operation = display = '';
                counter1 = counter3 = false;
                counter2 = true;
                displayText.textContent = '';
            }
            else {
                if (display === '-_- Really Bruh -_-') {
                    num1 = num2 = operator = operation = display = '';
                    counter1 = counter3 = false;
                    counter2 = true;
                    displayText.textContent = '';
                }
                if (e.target.classList.contains('delete-recent')) {
                    if (counter1 === false) { 
                        num1 = num1.slice(0, (num1.length - 1));
                        display = num1 + ' ' + operator + ' ' + num2;
                    }
                    else if (counter2 === false) {
                        operator = operator.slice(0, (operator.length - 1));
                        display = num1 + ' ' + operator + ' ' + num2;
                        if (operator.length === 0) {
                            counter1 = false;
                        }
                    }
                    else if (counter3 === false) {
                        num2 = num2.slice(0, (num2.length - 1));
                        display = num1 + ' ' + operator + ' ' + num2;
                        if (num2.length === 0) {
                            counter2 = false;
                        }
                    }
                    displayText.textContent = display;
                }
                else if (e.target.classList.contains('number') && counter1 === false) {
                    counter2 = false;
                    if (!num1.includes('.')) {;
                        num1 = num1 + e.target.textContent;
                    }
                    else {
                        if (e.target.textContent != '.') {
                            num1 = num1 + e.target.textContent;
                        }
                    }
                    display = num1 + ' ' + operator + ' ' + num2;
                    displayText.textContent = display;
                }
                else if (e.target.classList.contains('operation')) {
                    if (e.target.classList.contains('minus')) {
                        if (num1.indexOf('-') > -1 && counter1 === false) {
                            num1 = num1.replace('-', '');
                        }
                        else if (num1.indexOf('-') <= -1 && counter1 === false) {
                            num1 = num1.replace('', '-');
                        }

                        if (num2.indexOf('-') > -1 && operator != '') {
                            num2 = num2.replace('-', '');
                        }

                        else if (num2.indexOf('-') <= -1 && operator != '') {
                            num2 = num2.replace('', '-');
                        }
                        display = num1 + ' ' + operator + ' ' + num2;
                        displayText.textContent = display;
                    }
                    else {
                        if (counter2 === false) {
                            counter1 = true;
                            if (e.target.classList.contains('power')) {
                                operator = '^';
                            }
                            else {
                                operator = e.target.textContent;
                            }
                            operation = e.target.value;
                            display = num1 + ' ' + operator + ' ' + num2;
                            displayText.textContent = display;
                        }
                        else if (counter2 == true && counter1 == true) {
                            if (e.target.classList.contains('power')) {
                                operator = '^';
                            }
                            else {
                                operator = e.target.textContent;
                            }
                            num1 = operate(operation, operator, num1, num2);
                            display = num1 + ' ' + operator;
                            displayText.textContent = display;
                            num2 = '';
                            operation = e.target.value;
                        }
                    }
                }
                else if (e.target.classList.contains('number') && counter3 === false) {
                    counter2 = true;
                    if (!num2.includes('.')) {
                        ;
                        num2 = num2 + e.target.textContent;
                    }
                    else {
                        if (e.target.textContent != '.') {
                            num2 = num2 + e.target.textContent;
                        }
                    }
                    display = num1 + ' ' + operator + ' ' + num2;
                    displayText.textContent = display;
                }
                else if (e.target.classList.contains('calculate')) {
                    num_check = operate(operation, operator, num1, num2);
                    if (num_check === display) {
                        counter1 = true;
                        counter2 = false;
                    }
                    else {
                        counter1 = counter2 = false;
                        num1 = num_check;
                        display = num1;
                        displayText.textContent = display;
                        operator = '';
                        num2 = '';
                    }
                }
            }
        });    
    });
}

// Calls appropriate math function
function operate(operation, operator, num1, num2) {
    let answer;
    if (num1 === '' || num2 === '' || operator === '') {
        answer = errorCheck(num1, num2, operator);
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

function errorCheck(num1, num2, operator) {
    if (num1 === '' && num2 === '' && operator === '') {
        answer = '';
    }
    else if (num2 === '' && operator === '') {
        answer = num1;
    }
    else if (num2 === '') {
        answer = num1 + ' ' + operator + ' ' + num2;
    }
    return answer;
}
