// Example 1: Using every to check if all elements are even
const numbers1 = [2, 4, 6, 8];
const allEven1 = numbers1.every((number) => number % 2 === 0);
console.log(allEven1); // Output: true (all numbers are even)

// Example 2: Using every to check if all elements are positive
const numbers2 = [5, -3, 10, 8];
const allPositive = numbers2.every((number) => number > 0);
console.log(allPositive); // Output: false (not all numbers are positive)

// Example 3: Using every with objects in an array
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
];
const allAdults = people.every((person) => person.age >= 18);
console.log(allAdults); // Output: true (all people are adults)

// In Summary:
// - The `every` method is used on arrays to check if all elements satisfy a given condition.
// - It returns `true` if all elements meet the condition, otherwise `false`.
