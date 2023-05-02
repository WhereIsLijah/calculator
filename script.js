function populate(buttonId){

    switch (buttonId) {
                case "myNum0":
                    return 0;
                case "myNum1":
                    return 1;
                case '-':
                    return 2;
                case '*':
                    return 3;
                case '/':
                    return divideNum(num1, num2);
    }

}

function buttonEvent(buttonId) {
    const button = document.getElementById(buttonId);
    const display = document.getElementById("res_display");

    button.addEventListener("click", function () {
 

        display.textContent += button.textContent;
    });
}

const addNum = (num1, num2) => num1 + num2;
const subNum = (num1, num2) => num1 - num2;
const multiplyNum = (num1, num2) => num1 * num2;
const divideNum = (num1, num2) => num1 / num2;
const modNum = (num1, num2) => num1 % num2;
const plusMinus = (num) => num * - 1;

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return addNum(num1, num2);
        case '-':
            return subNum(num1, num2);
        case '*':
            return multiplyNum(num1, num2);
        case '/':
            return divideNum(num1, num2);
    }
}



//Change background colors of button
//Design Iphone Shape, add clock and battery level
//Use DOM for viewing input text
//create hover for buttons
//test functions
//use switch case + DOM for number selection
//add copyright with github link