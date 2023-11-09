// Example 1: Using some to check if any number is greater than 10
const numbers1 = [5, 8, 12, 3];
const anyGreaterThan10 = numbers1.some((number) => number > 10);
console.log(anyGreaterThan10); // Output: true (there's at least one number > 10)

// Example 2: Using some to check if any string has more than 5 characters
const words = ['apple', 'banana', 'grape', 'kiwi'];
const anyLongWord = words.some((word) => word.length > 5);
console.log(anyLongWord); // Output: true (there's at least one word with more than 5 characters)

// Example 3: Using some with objects in an array
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
const anyAdult = people.some((person) => person.age >= 18);
console.log(anyAdult); // Output: true (there's at least one adult)

// In Summary:
// - The `some` method is used on arrays to check if at least one element satisfies a given condition.
// - It returns `true` if at least one element meets the condition, otherwise `false`.
