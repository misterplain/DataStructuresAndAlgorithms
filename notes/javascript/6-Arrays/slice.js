// Using slice to Create a Shallow Copy of an Array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

// Using slice to Extract a Portion of an Array
const numbers = [10, 20, 30, 40, 50];
const subArray = numbers.slice(1, 4); // Extract elements from index 1 (inclusive) to 4 (exclusive)
console.log(subArray); // Output: [20, 30, 40]

// Using slice to Copy the Last Elements of an Array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const lastThreeFruits = fruits.slice(-3); // Copy the last 3 elements
console.log(lastThreeFruits); // Output: ['cherry', 'date', 'elderberry']

// Using slice to Extract Elements without Modifying the Original Array
const colors = ['red', 'green', 'blue', 'yellow'];
const selectedColors = colors.slice(1, 3); // Extract elements from index 1 to 3
console.log(selectedColors); // Output: ['green', 'blue']

// In Summary:
// - The `slice` method creates a shallow copy of an array or extracts a portion of an array.
// - When called without arguments, it copies the entire array.
// - The first argument specifies the start index (inclusive), and the second argument specifies the end index (exclusive).
// - `slice` does not modify the original array; it returns a new array with the selected elements.
