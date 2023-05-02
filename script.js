const addNum =  (num1, num2) => num1 + num2;
const subNum =  (num1, num2) => num1 - num2;
const multiplyNum =  (num1, num2) => num1 * num2;
const divideNum =  (num1, num2) => num1 / num2;
const modNum =  (num1, num2) => num1 / num2;
const plusMinus =  (num) => num * - 1;

function operate(operator, num1, num2)
{
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

function display(){


}

//Change background colors of button
//Design Iphone Shape, add clock and battery level
//Use DOM for viewing input text
//create hover for buttons
//test functions
//