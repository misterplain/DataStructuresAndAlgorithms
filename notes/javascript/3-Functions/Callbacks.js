// Arrow Functions in JavaScript

// Basic Arrow Function:
const add = (a, b) => a + b;

// Function Call:
console.log(add(2, 3)); // Output: 5

// In this example, we define an arrow function 'add' that takes two parameters and returns their sum.

// Arrow Function with No Parameters:
const greet = () => "Hello, World!";

// Function Call:
console.log(greet()); // Output: "Hello, World!"

// Arrow functions can have no parameters by using an empty set of parentheses.

// Arrow Function with a Single Parameter:
const square = x => x * x;

// Function Call:
console.log(square(4)); // Output: 16

// If an arrow function has a single parameter, you can omit the parentheses around the parameter.

// Arrow Function with Multiple Statements:
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Function Call:
console.log(multiply(3, 4)); // Output: 12

// Arrow functions can have multiple statements enclosed in curly braces.
// In this example, we calculate the product of two numbers.

// Arrow Functions and 'this' Keyword:
const person = {
  name: "John",
  greet: function() {
    setTimeout(function() {
      console.log(`Hello, ${this.name}!`); // 'this' refers to the global object (e.g., 'window' in browsers)
    }, 1000);
  },
};

person.greet(); // Output: "Hello, undefined!"

// Traditional functions have their own 'this' context, which can lead to unexpected behavior.
// Arrow functions, however, capture the 'this' value from their surrounding code.
// To fix the issue above, you can use an arrow function.

const personFixed = {
  name: "Jane",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // 'this' refers to the 'personFixed' object
    }, 1000);
  },
};

personFixed.greet(); // Output: "Hello, Jane!"

// In this example, we use an arrow function inside setTimeout to maintain the correct 'this' context.

// Arrow Functions in Array Methods:
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Arrow functions are commonly used with array methods like 'map', 'filter', and 'reduce' for concise code.

// Arrow Functions can be useful for shorter and more readable code in various contexts.
