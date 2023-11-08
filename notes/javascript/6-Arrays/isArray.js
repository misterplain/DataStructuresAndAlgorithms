// Least Complex: Checking if an Object is an Array
const arr = [1, 2, 3];
const isArr = Array.isArray(arr);
console.log(isArr); // Output: true

const obj = { name: 'John' };
const isNotArr = Array.isArray(obj);
console.log(isNotArr); // Output: false

// Checking for Arrays in Different Scenarios
function checkIfArray(input) {
  if (Array.isArray(input)) {
    return 'It is an array.';
  } else {
    return 'It is not an array.';
  }
}

console.log(checkIfArray([1, 2, 3])); // Output: 'It is an array.'
console.log(checkIfArray('Hello')); // Output: 'It is not an array.'
console.log(checkIfArray({ name: 'Alice' })); // Output: 'It is not an array.'

// In Summary:
// - The `Array.isArray()` function is used to check if a given value is an array.
// - It returns `true` if the value is an array, and `false` otherwise.
// - This function is useful for handling different data types and ensuring you're working with arrays when needed.
