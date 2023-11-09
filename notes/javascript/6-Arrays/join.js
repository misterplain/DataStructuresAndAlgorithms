// Example 1: Joining elements with a simple delimiter
const fruits = ["apple", "banana", "cherry"];
const commaSeparated = fruits.join(", ");
console.log(commaSeparated); // Output: "apple, banana, cherry"

// Example 2: Joining elements with a different delimiter
const colors = ["red", "green", "blue"];
const dashSeparated = colors.join("-");
console.log(dashSeparated); // Output: "red-green-blue"

// Example 3: Joining elements with an empty delimiter (concatenating)
const numbers = [1, 2, 3, 4, 5];
const concatenated = numbers.join("");
console.log(concatenated); // Output: "12345"

// Example 4: Joining elements with a custom message
const messages = ["Hello", "World!"];
const greeting = messages.join(" ");
console.log(greeting); // Output: "Hello World!"

// Example 5: Joining elements with complex objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
const userString = users.join("\n");
console.log(userString);
// Output:
// "{ name: 'Alice', age: 25 }
// { name: 'Bob', age: 30 }
// { name: 'Charlie', age: 22 }"

// In Summary:
// - The `join` method combines elements of an array into a single string.
// - You can specify a delimiter to separate the elements.
// - It is commonly used for formatting strings and creating CSV-like data.
