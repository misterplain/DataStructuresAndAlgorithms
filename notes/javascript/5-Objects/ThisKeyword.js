// JavaScript 'this' Keyword in Objects

// Global Context:
console.log(this === window); // In a browser, 'this' refers to the global window object

// Function Context:
function sayHello() {
  console.log(this); // In a regular function, 'this' refers to the global context (window in a browser)
}

sayHello();

// Method Context:
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`); // In an object method, 'this' refers to the object itself
  },
};

person.greet(); // Method context: "Hello, Alice!"

// Constructor Function Context:
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Constructor function context: "John"

// Event Handler Context:
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log(this); // In an event handler, 'this' refers to the DOM element that triggered the event
});

// Arrow Function Context:
const arrowFunctionExample = () => {
  console.log(this); // In an arrow function, 'this' retains the context from the surrounding code
};

arrowFunctionExample();

// In Summary:
// - 'this' refers to the current execution context.
// - In a regular function, it refers to the global context (window in a browser).
// - In an object method, it refers to the object itself.
// - In a constructor function, it refers to the new object being created.
// - In an event handler, it refers to the DOM element that triggered the event.
// - In an arrow function, it retains the context from the surrounding code.
