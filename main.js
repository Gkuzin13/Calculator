// Grabs elements from HTML
const operate = document.getElementById('equals');

const operators = document.querySelectorAll('.operators');

const nums = document.querySelectorAll('.nums');

let display = document.getElementById('display');

let topDisplay = document.getElementById('display-top');

const clearDisplay = document.querySelector('.clear');

// Declares variables
let currentOperator = [];

let firstNumber = [];

let secondNumber = [];

let lastResult = [];

// Grabs the number buttons 
nums.forEach(function(nums) {
    nums.addEventListener('click', function() {   

        // Stores the value from HTML in number var
        let number = nums.getAttribute('value');

        // Concatenates numbers and stores in value
        firstNumber += number;

        // Prevents numbers from concatenating on display
        if(currentOperator != []) {
            display.textContent = [];
        };

        // Concatenates numbers on main display
        display.textContent += [`${firstNumber}`];

        console.log(firstNumber)
    });
});

// Grabs the operator buttons
operators.forEach(function(operators) {
    operators.addEventListener('click', function() {
        // Stores the value from HTML in operator var
        let operator = operators.getAttribute('value');
 
        currentOperator = operator;

        // Displays last value before operating
        topDisplay.textContent = [`${firstNumber} ${currentOperator} `]

        // Stores first value in second one
        secondNumber = firstNumber;

        console.log(operator)

        // Resets first value
        firstNumber = [];
    });
});

// Grabs the equals button and performs calculation
operate.addEventListener('click', e => {
    // Compares corrent operator and performs calculation
    switch(currentOperator) {
        case '+':
            lastResult = parseInt(`${firstNumber}`) + parseInt(`${secondNumber}`);
            break;
        case '-':
            lastResult = parseInt(`${firstNumber}`) - parseInt(`${secondNumber}`);
            
            break;
        case '÷':
            lastResult = parseInt(`${secondNumber}`) / parseInt(`${firstNumber}`);
         
            break;
        case '×':
            lastResult = parseInt(`${firstNumber}`) * parseInt(`${secondNumber}`);
            
            break;  
    };
    
    // Displays last performed operation on top display
    topDisplay.textContent = `${secondNumber} ${currentOperator} ${firstNumber} =  `;
    
    // Displays the result of the calculation
    display.textContent = [`${lastResult}`];
    
    // Stores last reuslt of the calculation to perform further operations
    firstNumber = lastResult;

    console.log(lastResult);
});

// Grabs clear button
clearDisplay.addEventListener('click', e => {

    // Resetes all values and the display
    display.textContent = [];

    topDisplay.textContent = [];

    currentNumber = [];

    firstNumber = [];

    secondNumber = [];
});


    



    
