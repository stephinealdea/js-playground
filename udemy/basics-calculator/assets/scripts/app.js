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
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + inputVal;
  createAndWriteOutput('+', initialResult, inputVal);
  writeToLog('ADD', initialResult, inputVal, currentResult);
}

function subtract() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - inputVal;
  createAndWriteOutput('-', initialResult, inputVal);
  writeToLog('SUBTRACT', initialResult, inputVal, currentResult);
}

function multiply() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * inputVal;
  createAndWriteOutput('*', initialResult, inputVal);
  writeToLog('MULTIPLY', initialResult, inputVal, currentResult);
}

function divide() {
  const inputVal = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / inputVal;
  createAndWriteOutput('/', initialResult, inputVal);
  writeToLog('DIVIDE', initialResult, inputVal, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);