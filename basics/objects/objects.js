console.log("js loaded!");
// Basic Object Declaration
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isStudent: false,
};

// Accessing Properties
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe

// Modifying Properties
person.age = 31;
person['isStudent'] = true;

// Adding New Properties
person.city = 'New York';

// Deleting Properties
delete person.isStudent;

// Iterating over Object Properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object Methods
let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  start: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
};

car.start();