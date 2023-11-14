// Use Case 1: Basic Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3));
// Output: 5

// Use Case 2: Arrow Function with No Arguments
const greet = () => "Hello, world!";
console.log(greet());
// Output: Hello, world!

// Use Case 3: Single Argument Arrow Function
const square = (x) => x * x;
console.log(square(4));
// Output: 16

// Use Case 4: Arrow Function in Array Methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

// Use Case 5: Arrow Functions with Object Literals
const createPerson = (name, age) => ({ name, age });
const person = createPerson("Alice", 30);
console.log(person);
// Output: { name: 'Alice', age: 30 }

// Use Case 6: Arrow Functions in Callbacks
const numbersArray = [10, 20, 30, 40];
const doubledNumbers = numbersArray.map((num) => num * 2);
console.log(doubledNumbers);
// Output: [20, 40, 60, 80]

// Use Case 7: Arrow Functions and 'this'
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
const counter = new Counter(); // Prints increasing numbers every second.

// In Summary:
// - Arrow functions provide a concise syntax for defining functions.
// - They are particularly useful for short, simple functions.
// - Arrow functions inherit the 'this' value from the surrounding context,
//   making them suitable for callbacks and event handlers.
// - They cannot be used as constructors and do not have their own 'this'.
