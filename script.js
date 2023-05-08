let displayValue = '';
let optr;


function buttonEvent(buttonId) {
    const button = document.getElementById(buttonId);  
    const display = document.getElementById("res_display");
  
    display.textContent += button.textContent;
    displayValue += display.textContent;
  }

function operator(optr) {
    const button = document.getElementById(optr);  
    const display = document.getElementById("res_display");
  
    display.textContent = button.textContent;
    optr = display.textContent;

  }

  

  button.addEventListener("click", function () {
    display.textContent = ;


    display.textContent += button.textContent;
});
  

const addNum = (num1, num2) => num1 + num2;
const subNum = (num1, num2) => num1 - num2;
const multiplyNum = (num1, num2) => num1 * num2;
const divideNum = (num1, num2) => num1 / num2;
const modNum = (num1, num2) => num1 % num2;
const plusMinus = (num) => num * - 1;

function operate(optr) {

}



// Change background colors of button
// Design Iphone Shape, add clock and battery level
// Use DOM for viewing input text
// create hover for buttons
// test functions
// use switch case + DOM for number selection
// add copyright with github link


