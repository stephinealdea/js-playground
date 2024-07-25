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

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);