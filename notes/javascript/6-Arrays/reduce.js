// Simple Summation Using reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15

// Concatenating an Array of Strings Using reduce
const words = ['Hello', ' ', 'World', '!'];
const sentence = words.reduce((accumulator, current) => accumulator + current, '');
console.log(sentence); // Output: 'Hello World!'

// Counting Occurrences of Elements in an Array Using reduce
const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log(fruitCount);
// Output: { apple: 3, banana: 2, cherry: 1 }

// Flattening an Array of Arrays Using reduce
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((flat, arr) => flat.concat(arr), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using Initial Value and No Initial Value
const numbers2 = [1, 2, 3, 4, 5];
const sumWithInitialValue = numbers2.reduce((acc, curr) => acc + curr, 0);
const sumWithoutInitialValue = numbers2.reduce((acc, curr) => acc + curr);
console.log(sumWithInitialValue); // Output: 15
console.log(sumWithoutInitialValue); // Output: 15

// In Summary:
// - The `reduce` method applies a function to an accumulator and each element in an array, resulting in a single value.
// - The provided function takes two arguments: an accumulator and the current element.
// - It can be used for various operations like summing values, concatenating strings, counting occurrences, etc.
// - You can provide an optional initial value as the second argument to `reduce`.
// - The order of elements in the array matters when using `reduce`.
