// Spread and Rest Operators in JavaScript

// 1. Spread Operator (...)
// The spread operator allows you to expand an iterable (e.g., an array) into individual elements.

// Example 1: Array Concatenation
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// Example 2: Copying Arrays
let originalArray = [1, 2, 3];
let copyArray = [...originalArray];
console.log(copyArray);

// Example 3: Spreading Elements into Function Arguments
function add(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
let result = add(...numbers);
console.log(result);

// 2. Rest Operator (...)
// The rest operator allows you to gather multiple arguments into an array.

// Example 4: Gathering Function Arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
let totalSum = sum(1, 2, 3, 4, 5);
console.log(totalSum);

// Example 5: Combining Rest Parameter with Other Parameters
function multiply(multiplier, ...values) {
  return values.map(value => value * multiplier);
}
let multipliedValues = multiply(2, 1, 2, 3, 4);
console.log(multipliedValues);

// Example 6: Using Rest Operator for Array Destructuring
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

// Example 7: Using Rest Operator for Object Destructuring (ES2018)
let { a, ...restObject } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(restObject); // { b: 2, c: 3 }
