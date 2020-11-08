// Grabs elements from HTML & DOM
const operate = document.getElementById('equals');

const operators = document.querySelectorAll('.operators');

const nums = document.querySelectorAll('.nums');

const backspace = document.querySelector('.backspace');

let display = document.getElementById('display');

let topDisplay = document.getElementById('display-top');

const clearDisplay = document.querySelector('.clear');

// Declares variables
let currentOperator = [];

let firstNumber = [];

let secondNumber = [];

let result = [];

let operationRun = false;

let activeOperator = false;

let numberSelected = false;

// Sets the default display value to 0
display.textContent = [0];

// Grabs the number buttons 
nums.forEach(function(nums) {
    nums.addEventListener('click', function() {
        // Limits maximum number length
        if(firstNumber.length > 15) {
            return;
        }; 
        
        // Resets previous calculations if an operator hasn't been chosen
        if(activeOperator === false && operationRun === true) {

            topDisplay.textContent = [];
        
            firstNumber = [];
        
            secondNumber = [];
        
            result = [];
        
            operationRun = false;
        
            activeOperator = false;
        
            numberSelected = false;
        };
        
        // 
        if(activeOperator === true) {
            secondNumber = firstNumber;
            firstNumber = [];  
        };

        // Stores the value from HTML in number var
        let number = nums.getAttribute('value');

        // Stores value in variable
        firstNumber += number;

        // Prevents numbers from concatenating on display
        if(currentOperator != []) {
            display.textContent = [];
        };

        // Concatenates numbers on main display
        display.textContent += [firstNumber];
        
        numberSelected = true;

        activeOperator = false;

        console.log(firstNumber, currentOperator, secondNumber, result);
    });
});

// Grabs the operator buttons
operators.forEach(function(operators) {
    operators.addEventListener('click', (e) => {
        activeOperator = true;

        // Stores the value from HTML in operator var
        let operator = operators.getAttribute('value');
        currentOperator = operator;
        
        // Stores result in first number to make further calculations
        if(operationRun === true) {
            firstNumber = result;
        };
        // Displays last value before operating
        topDisplay.textContent = [`${firstNumber} ${currentOperator} `]

        console.log(firstNumber, currentOperator, secondNumber, result);
    });
});

// Grabs the equals button and performs calculation
operate.addEventListener('click', (e) => {
    if(numberSelected === false) {
        return;
    };

    // Shows an error message when a number is divided by zero
    if((currentOperator === '÷') && (firstNumber == 0)) {
        display.style.fontSize = '2.2rem';
        display.style.paddingBottom = '0.2em';
        
        display.textContent = ['Cannot divide by zero'];

        firstNumber = [];

        secondNumber = [];

        result = [];

        return;
    };
    
    // Calculates according to chosen operator
    switch(currentOperator) {
        case '+':
            result = parseInt(`${firstNumber}`) + parseInt(`${secondNumber}`);

            break;
        case '-':
            result = parseInt(`${secondNumber}`) - parseInt(`${firstNumber}`);
            
            break;
        case '÷':
            result = parseInt(`${secondNumber}`) / parseInt(`${firstNumber}`);
         
            break;
        case '×':
            result = parseInt(`${firstNumber}`) * parseInt(`${secondNumber}`);
            
            break;  
    };

    // Displays last performed operation on top display
    topDisplay.textContent = [`${secondNumber} ${currentOperator} ${firstNumber} =  `.slice(0, 35)];
    
    // Displays the result of the calculation
    display.textContent = [`${result}`.slice(0, 16)];
    
    operationRun = true;

    activeOperator = false;
    
    // Stores the result in second number to perform same calculation again until operator chosen
    if(activeOperator === false) {
        secondNumber = result;
    };

    console.log(firstNumber, currentOperator, secondNumber, result);
});

// Grabs clear button
clearDisplay.addEventListener('click', e => {
    // Resetes all values and the display
    display.textContent = [0];

    topDisplay.textContent = [];

    firstNumber = [];

    secondNumber = [];

    result = [];

    operationRun = false;

    activeOperator = false;

    numberSelected = false;
});


// Bugs to fix
    
  // pressing operate without choosing a second number

// Featuers to add
  
  // add a backspace button 

  // add keyboard support