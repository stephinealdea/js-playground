/*
Notes
Variable Naming
Allowed: 
let userName (Best practice is to use camelCase)
let ageGroup5 (only letters and digits)
let $kindOfSpecial (starting with $ is allowed)
let _internalValue (starting with _ is allowed)

Not Allowed / Not Recommended
let user_name (Allowed but bad practice)
let 21Players (Starting digits is not allowed)
let user-b (No special characters, not allowed)
let let (keywords not allowed, or the predefined variables names)
*/

const defaultRsult = 0;
let currentResult = defaultRsult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + inputVal;
  createAndWriteOutput('+', initialResult, inputVal);
}

function subtract() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - inputVal;
  createAndWriteOutput('-', initialResult, inputVal);
}

function multiply() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * inputVal;
  createAndWriteOutput('*', initialResult, inputVal);
}

function divide() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / inputVal;
  createAndWriteOutput('/', initialResult, inputVal);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);