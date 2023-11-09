// Example 1: Reversing an array of numbers
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// Example 2: Reversing an array of strings
const fruits = ["apple", "banana", "cherry"];
const reversedFruits = fruits.reverse();
console.log(reversedFruits); // Output: ["cherry", "banana", "apple"]

// Example 3: Reversing an array with mixed data types
const mixed = [1, "apple", true, { name: "Alice" }];
const reversedMixed = mixed.reverse();
console.log(reversedMixed);
// Output: [{ name: 'Alice' }, true, 'apple', 1]

// Example 4: Reversing an array in-place
const animals = ["dog", "cat", "horse"];
animals.reverse(); // Reverses the array in-place
console.log(animals); // Output: ["horse", "cat", "dog"]

// Example 5: Reversing a subarray using slice and reverse
const colors = ["red", "green", "blue", "yellow"];
const reversedColors = colors.slice(0, 3).reverse();
console.log(reversedColors); // Output: ["blue", "green", "red"]

// In Summary:
// - The `reverse` method reverses the order of elements in an array.
// - It modifies the original array in place and does not create a new one.
