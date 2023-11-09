// Example 1: Creating an array from an iterable (e.g., a string)
const str = "Hello";
const strArray = Array.from(str);
console.log(strArray); // Output: ['H', 'e', 'l', 'l', 'o']

// Example 2: Creating an array from an array-like object (e.g., arguments)
function getArgumentsAsArray() {
  return Array.from(arguments);
}
const argArray = getArgumentsAsArray(1, 2, 3);
console.log(argArray); // Output: [1, 2, 3]

// Example 3: Using a mapping function with Array.from
const numbers = [1, 2, 3, 4, 5];
const doubledArray = Array.from(numbers, (num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

// Example 4: Creating an array with a specified length
const length = 5;
const emptyArray = Array.from({ length });
console.log(emptyArray); // Output: [undefined, undefined, undefined, undefined, undefined]

// Example 5: Using Array.from to clone an existing array
const originalArray = [10, 20, 30];
const clonedArray = Array.from(originalArray);
console.log(clonedArray); // Output: [10, 20, 30]

// In Summary:
// - `Array.from` creates a new array from an iterable or array-like object.
// - It can take a mapping function as the second argument to transform elements.
// - You can use it to create arrays with a specific length or clone existing arrays.
