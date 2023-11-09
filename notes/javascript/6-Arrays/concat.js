// Example 1: Concatenating two arrays
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4]

// Example 2: Concatenating three arrays
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const other = ['chocolate', 'ice cream'];
const combined = fruits.concat(vegetables, other);
console.log(combined);
// Output: ['apple', 'banana', 'carrot', 'broccoli', 'chocolate', 'ice cream']

// Example 3: Combining arrays with different data types
const numbers = [1, 2, 3];
const words = ['hello', 'world'];
const result = numbers.concat(words);
console.log(result); // Output: [1, 2, 3, 'hello', 'world']

// In Summary:
// - The `concat` method creates a new array by merging two or more arrays.
// - It doesn't modify the original arrays; instead, it returns a new concatenated array.
