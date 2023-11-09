// Example 1: Finding the index of an element in an array
const fruits = ["apple", "banana", "cherry", "date"];
const indexOfBanana = fruits.findIndex((fruit) => fruit === "banana");
console.log(indexOfBanana); // Output: 1

// Example 2: Finding the index of the first even number in an array
const numbers = [3, 7, 8, 2, 9];
const indexOfFirstEven = numbers.findIndex((num) => num % 2 === 0);
console.log(indexOfFirstEven); // Output: 2 (index of 8)

// Example 3: Finding the index of the first element that satisfies a complex condition
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 19 },
];
const indexOfFirstAdult = people.findIndex((person) => person.age >= 18);
console.log(indexOfFirstAdult); // Output: 0 (index of Alice)

// Example 4: Handling cases where no element matches the condition
const colors = ["red", "blue", "green"];
const indexOfPurple = colors.findIndex((color) => color === "purple");
console.log(indexOfPurple); // Output: -1 (no element found)

// In Summary:
// - The `findIndex` method is used to find the index of the first element in an array that satisfies a given condition.
// - It takes a callback function as an argument, which should return true for the desired element.
// - If an element is found, it returns the index of that element; otherwise, it returns -1.
