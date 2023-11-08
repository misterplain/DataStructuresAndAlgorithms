// Simple Iteration Over an Array Using forEach
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// 'apple'
// 'banana'
// 'cherry'

// Modifying Elements in an Array Using forEach
const numbers = [1, 2, 3, 4];
numbers.forEach((number, index, arr) => {
  arr[index] = number * 2;
});
console.log(numbers); // Output: [2, 4, 6, 8]

// Creating a New Array Using forEach
const originalArray = [1, 2, 3];
const newArray = [];
originalArray.forEach((value) => {
  newArray.push(value * 2);
});
console.log(newArray); // Output: [2, 4, 6]

// Summing Elements in an Array Using forEach
const scores = [85, 90, 78, 92, 88];
let totalScore = 0;
scores.forEach((score) => {
  totalScore += score;
});
console.log(totalScore); // Output: 433

// In Summary:
// - The `forEach` method iterates over the elements of an array and applies a provided function to each element.
// - The provided function takes three arguments: the current element, the current index, and the array itself.
// - It's commonly used for simple iteration, but it doesn't create a new array or modify the original array.
// - Use `forEach` when you want to perform an action for each element in an array without changing the array itself.
