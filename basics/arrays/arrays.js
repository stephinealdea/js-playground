console.log("js loaded!");

// Basic Array Declaration
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Accessing Elements
console.log(fruits[0]); // Output: Apple

// Modifying Elements
fruits[1] = 'Grapes';
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange', 'Mango']

// Array Length
console.log(fruits.length); // Output: 4

// Adding Elements - push, unshift
fruits.push('Pineapple'); // Adds to the end
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange', 'Mango', 'Pineapple']

fruits.unshift('Strawberry'); // Adds to the beginning
console.log(fruits); // Output: ['Strawberry', 'Apple', 'Grapes', 'Orange', 'Mango', 'Pineapple']

// Removing Elements - pop, shift
fruits.pop(); // Removes from the end
console.log(fruits); // Output: ['Strawberry', 'Apple', 'Grapes', 'Orange', 'Mango']

fruits.shift(); // Removes from the beginning
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange', 'Mango']

// Array Slicing
let slicedFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 2 (3 not included)
console.log(slicedFruits); // Output: ['Grapes', 'Orange']

// Concatenating Arrays
let moreFruits = ['Papaya', 'Kiwi'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// Iterating over Arrays
for (let i = 0; i < allFruits.length; i++) {
  console.log(allFruits[i]);
}

// forEach for iteration
allFruits.forEach((fruit) => {
  console.log(fruit);
});

// Mapping Array - creating a new array with modified elements
let upperCaseFruits = allFruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);

// Filtering Array
let filteredFruits = allFruits.filter((fruit) => fruit.length > 6);
console.log(filteredFruits);

// Find - returns the first element that satisfies the condition
let orangeIndex = allFruits.find((fruit) => fruit === 'Orange');
console.log(orangeIndex);

// Some and Every - Check if some or every element satisfies a condition
let hasShortFruitName = allFruits.some((fruit) => fruit.length < 5);
console.log(hasShortFruitName);

let allFruitsAreLong = allFruits.every((fruit) => fruit.length > 3);
console.log(allFruitsAreLong);

// Reduce - Accumulate values
let totalLength = allFruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);