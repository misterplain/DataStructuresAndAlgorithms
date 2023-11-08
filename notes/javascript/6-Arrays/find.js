// Finding an Element in an Array
const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find((element) => element % 2 === 0);
console.log(evenNumber); // Output: 2

// Finding an Object with a Specific Property
const students = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 28 },
];
const charlie = students.find((student) => student.name === 'Charlie');
console.log(charlie); // Output: { name: 'Charlie', age: 28 }

// Finding the First Element That Meets a Condition
const scores = [80, 90, 70, 60, 85];
const passedScore = scores.find((score) => score >= 80);
console.log(passedScore); // Output: 80

// Finding Undefined If No Element Matches the Condition
const prices = [10, 15, 20, 25];
const expensiveItem = prices.find((price) => price > 30);
console.log(expensiveItem); // Output: undefined

// In Summary:
// - The `find` method is used to search for the first element in an array that satisfies a given condition.
// - It takes a callback function as an argument, which should return `true` for the desired element.
// - The method returns the first matching element or `undefined` if no element meets the condition.
// - `find` is a great choice for finding specific elements in an array without iterating through all elements.
