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

currentResult = currentResult + 10;

let calculationDescription = `(${defaultRsult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);