const numbers = [1, 2, 100, 4, -1, 5, 6];

const greaterThan5 = numbers.filter(val => val > 5);
console.log(greaterThan5);

const mappedNum = numbers.map(val => ({ num: val }));
console.log(mappedNum);

const multiplication = numbers.reduce(
  (result, value) => result * value,
  1
);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let max = nums[0];
  let min = nums[0];
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return [min, max];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const someIds = new Set();
someIds.add(7);
someIds.add(2);
someIds.add(2);

console.log(someIds);