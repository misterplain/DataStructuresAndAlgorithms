// Using map to Double Each Element in an Array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using map to Convert Array of Strings to Uppercase
const fruits = ['apple', 'banana', 'cherry'];
const capitalizedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capitalizedFruits); // Output: ['APPLE', 'BANANA', 'CHERRY']

// Using map to Extract Specific Properties from an Array of Objects
const students = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];
const studentNames = students.map((student) => student.name);
console.log(studentNames); // Output: ['Alice', 'Bob', 'Charlie']

// Using map with Index Parameter
const words = ['hello', 'world', 'javascript'];
const wordWithIndex = words.map((word, index) => `${index + 1}. ${word}`);
console.log(wordWithIndex); // Output: ['1. hello', '2. world', '3. javascript']

// In Summary:
// - The `map` method applies a provided function to each element of an array and returns a new array with the results.
// - It does not modify the original array.
// - The provided function takes the current element as an argument and can also take an optional index and the original array itself.
// - `map` is often used for transforming data, such as applying calculations or extracting specific properties from objects.
