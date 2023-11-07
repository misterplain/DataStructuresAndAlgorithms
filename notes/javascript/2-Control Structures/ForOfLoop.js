// The for...of loop is used for iterating over iterable objects like arrays, strings, maps, sets, etc.
// It simplifies the process of iterating through elements.

// Simple for...of loop to iterate through an array.
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit); // Output: "apple", "banana", "cherry"
}

// In this example:
// - We define the loop variable `fruit` to represent each element of the 'fruits' array.
// - The loop iterates through the array, and `fruit` takes on each value in turn.

// You can also use for...of with strings to iterate through characters.
let sentence = "Hello, World!";
for (let char of sentence) {
  console.log(char); // Output: "H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"
}

// For...of loop is a convenient way to work with the elements of an array or characters in a string.

// You can use for...of with other iterable objects like maps.
let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// "name: John"
// "age: 30"

// In this example, the for...of loop iterates through the key-value pairs of a Map.

// You can also use for...of with other iterable objects like sets, NodeList, etc.
// It simplifies the process of iterating through various collections.

// Be cautious when using for...of with objects, as it is meant for iterable objects and not plain objects.

// The for...of loop is a powerful and concise way to iterate through elements of iterable objects in JavaScript.
