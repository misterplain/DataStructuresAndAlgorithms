// Example 1: Using flat to flatten a nested array by one level
const nestedArray = [1, [2, 3], [4, [5]]];
const flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4, [5]]

// Example 2: Using flat with depth argument to flatten to a specific level
const nestedArray2 = [1, [2, 3], [4, [5]]];
const flatArray2 = nestedArray2.flat(2);
console.log(flatArray2); // Output: [1, 2, 3, 4, 5]

// Example 3: Using flatMap to both flatten and transform elements
const numbers = [1, 2, 3];
const doubledAndSquared = numbers.flatMap((num) => [num * 2, num ** 2]);
console.log(doubledAndSquared); // Output: [2, 1, 4, 9, 6, 2]

// Example 4: Using flatMap to remove elements by returning an empty array
const numbers2 = [1, 2, 3, 4, 5];
const evensOnly = numbers2.flatMap((num) => (num % 2 === 0 ? [] : [num]));
console.log(evensOnly); // Output: [1, 3, 5]

// In Summary:
// - The `flat` method is used to flatten a nested array to one level.
// - It can take an optional depth argument to specify the level to flatten.
// - The `flatMap` method both flattens a nested array and allows element transformation.
// - It takes a callback function that transforms elements and should return an array.
