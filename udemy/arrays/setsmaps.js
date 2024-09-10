const ids = new Set(['Hi', 'from', 'set!']);
ids.add(2);

if (ids.has('Hi')) {
  ids.delete('Hi');
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personsData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personsData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personsData);
console.log(personsData.get(person1));

for (const [key, value] of personsData.entries()) {
  console.log(key, value);
}

for (const key of personsData.keys()) {
  console.log(key);
}

for (const value of personsData.values()) {
  console.log(value);
}

console.log(personsData.size);