let displayValue = '';
let optr = '';
let firstOprnd = '';

function buttonEvent(buttonId) {
    const button = document.getElementById(buttonId);  
    const display = document.getElementById("res_display");
  
    display.textContent += button.textContent;
  }

function operator(optr) {
    const button = document.getElementById(optr);  
    const display = document.getElementById("res_display");
  
    firstOprnd = display.textContent //strong firstoperands
    optr = button.value; //storing operator
        display.textContent = "";
     
}


  
function clearDisplay(){ 
display = document.getElementById("res_display")
display.textContent = '';
displayValue = '';
optr = '';
firstOprnd = '';
}


const addNum = (num1, num2) => num1 + num2;
const subNum = (num1, num2) => num1 - num2;
const multiplyNum = (num1, num2) => num1 * num2;
const divideNum = (num1, num2) => num1 / num2;
const modNum = (num1, num2) => num1 % num2;
const plusMinus = (num) => num * - 1;

function operate(optr) {

}



// Change background colors of button
// Design Iphone Shape
// create hover for buttons
// test functions
// Clear function
// Equal??
// add copyright with github link
//let operators keep hovering until next number is clicked
//floating line should close calc when swiped up
//set position of display to fixed
//buttons should not float

var today = new Date();
var iphoneTime = today.getHours() + ":" + today.getMinutes();

const timeDisplay = document.querySelector(".time_div");
timeDisplay.textContent = iphoneTime;