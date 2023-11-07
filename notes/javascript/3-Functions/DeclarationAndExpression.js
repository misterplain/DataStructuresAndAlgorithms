// Function Declarations vs. Function Expressions

// Function Declaration:
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Call:
console.log(greet("John")); // Output: "Hello, John!"

// In this example, we declare a function named 'greet' using a function declaration.
// It takes a 'name' parameter and returns a greeting string.

// Function Expression (Anonymous Function):
const greetFunc = function (name) {
  return `Hello, ${name}!`;
};

// Function Call:
console.log(greetFunc("Jane")); // Output: "Hello, Jane!"

// In this example, we create an anonymous function and assign it to the variable 'greetFunc'.
// The function takes a 'name' parameter and returns a greeting string.

// Named Function Expression:
const greetName = function greet(name) {
  return `Hello, ${name}!`;
};

// Function Call:
console.log(greetName("Alice")); // Output: "Hello, Alice!"

// In this example, we create a named function expression.
// The function is assigned to the variable 'greetName' and is still accessible by its name 'greet'.

// Hoisting Behavior:
console.log(hoistedFunc()); // Output: "I am hoisted!"

function hoistedFunc() {
  return "I am hoisted!";
}

// In JavaScript, function declarations are hoisted to the top of their containing scope,
// so they can be called before they are defined in the code.
// Function expressions are not hoisted in the same way.

// Arrow Function Expression:
const add = (a, b) => a + b;

// Function Call:
console.log(add(2, 3)); // Output: 5

// Arrow functions provide a more concise way to define functions, especially for simple expressions.

// Callback Function:
function processUserInput(callback) {
  let userInput = "Hello";
  callback(userInput);
}

// Callback Function Call:
processUserInput(function (input) {
  console.log(`User input: ${input}`);
});
// Output: "User input: Hello"

// Callback functions are often used to pass behavior as a parameter to another function.

// IIFE (Immediately Invoked Function Expression):
(function () {
  console.log("I am immediately invoked!");
})();

// This is an example of an IIFE, a function that's defined and executed immediately.

// Function Scope:
function outerFunction() {
  const outerVar = "I'm outer!";

  function innerFunction() {
    const innerVar = "I'm inner!";
    console.log(outerVar); // Accessing outer scope variable
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I'm outer!"

// Functions in JavaScript create their own scope, allowing access to variables from outer scopes.

// Closures:
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// Closures allow a function to maintain access to variables from its outer scope even after that scope has exited.

// Functions are fundamental in JavaScript and can be used in various ways to encapsulate and execute code.
