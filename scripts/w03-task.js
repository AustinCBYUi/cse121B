/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

const buttonElement = document.getElementById("addNumbers");

function addNumbers() {
    let num1 = Number(document.querySelector("#add1").value);
    let num2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(num1, num2);
}
buttonElement.addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const buttonElementSubtract = document.getElementById("subtractNumbers");

function subtract(number1, number2) {
    return number1 - number2;
}


function subNumbers() {
    let num1 = Number(document.querySelector("#subtract1").value);
    let num2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(num1, num2);
}
buttonElementSubtract.addEventListener("click", subNumbers);

/* Arrow Function - Multiply Numbers */
const buttonElementMultiply = document.getElementById("#multiplyNumbers");

const multi = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    num1 = Number(document.querySelector("#factor1").value);
    num2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multi(num1, num2);
}
buttonElementMultiply.addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
