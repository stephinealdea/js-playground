console.log("js loaded!");
/*--------------------- *
    * Variable
    * String
*------------------------*/
const myName = 'stephine';
const middle = 'miniz';
const last = 'aldea';
const dividerLine = '------------------------------------';

// use \ before a symbol if you want to display it as text
const sentence = 'she\'s beautiful';
const sentence2 = "she's \"cool\"";

const sampleText = `hello i am ${myName}. Nice to meet you.`;

console.log("type: string");
console.log(sampleText);
console.log(dividerLine);

/*--------------------- *
    * Variable
    * Number
*------------------------*/
const age = 100;
const a = 10;
const b = 20;

// To check what type a variable is you can you a function typeof
console.log("What variable type age: " + typeof age);

const smarties = 20;
const kids = 3;

// 20 / 3 = 6.666666666666667 not a whole number
const eachKidGets = smarties / kids; 
// To get a whole number or actual value to be divided for each kids (3)
const eachKidGetsNew = Math.floor(smarties / kids);
// How many left since it was divided to the 3 kids
const dadGets = smarties % kids;
 
console.log("type: number");
console.log(`"There is 20 smarties to be divided to 3 kids"`);
console.log(`Each kids get ${eachKidGetsNew} `);
console.log(`Dad gets ${dadGets} and he will give 1 to mom, ayyeeehh!`);

console.log(dividerLine);

/*--------------------- *
    * Variable
    * Object
*------------------------*/

const person = {
    firstname: 'stephine',
    lastname: 'aldea',
    age: 100
};

console.log("type: object");
console.log(person);
console.log(`Object value for firstname: ${person.firstname}`);
console.log(`Object value for first and lastname: ${person.firstname + ' ' + person.lastname}`);

console.log(dividerLine);

/*--------------------- *
    * Variable
    * Boolean
*------------------------*/

let age1 = 100;
let age2 = "100";
console.log("type: boolean");
// if we look the value of age1 and age 2 it is true that it has the same value and if we use a double =
console.log(`is the age value match if we use == : ${age1 == age2}`);
// However if we use a triple = it not only checking the value but also what type of the variable it is, 
// which results to false because age2 is a string and not a number
console.log(`is the age value match if we use === : ${age1 === age2}`);

console.log(dividerLine);