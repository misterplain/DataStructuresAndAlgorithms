// Example 1: Using reduceLeft to sum an array from left to right
const numbers = [1, 2, 3, 4, 5];
const sumLeft = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumLeft); // Output: 15

// Example 2: Using reduceRight to sum an array from right to left
const numbers2 = [1, 2, 3, 4, 5];
const sumRight = numbers2.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumRight); // Output: 15

// Example 3: Using reduceLeft to concatenate strings from left to right
const words = ['Hello', ', ', 'world', '!'];
const concatLeft = words.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(concatLeft); // Output: 'Hello, world!'

// Example 4: Using reduceRight to concatenate strings from right to left
const words2 = ['Hello', ', ', 'world', '!'];
const concatRight = words2.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(concatRight); // Output: '!world, Hello'

// In Summary:
// - Both reduceLeft and reduceRight are used to reduce an array into a single value.
// - The direction of iteration (left to right or right to left) is determined by the method used.
// - They take a callback function as an argument, which is applied to each element in the array.
// - The callback function receives an accumulator and the current value.
// - The initial value (second argument to reduce) is optional and serves as the initial accumulator value.
