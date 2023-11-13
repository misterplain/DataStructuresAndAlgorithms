// Use Case 1: Checking the Data Type of a Variable
const numberVar = 42;
const stringVar = "Hello, World!";
const booleanVar = true;

console.log(typeof numberVar); // "number"
console.log(typeof stringVar); // "string"
console.log(typeof booleanVar); // "boolean"
// The typeof keyword is used to determine the data type of a variable.

// Use Case 2: Detecting Undefined Variables
let undefinedVar;
console.log(typeof undefinedVar); // "undefined"
// When a variable is declared but not assigned a value, it has the data type "undefined."

// Use Case 3: Handling Functions
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // "function"
// The typeof keyword returns "function" for function objects.

// Use Case 4: Working with Objects
const person = { name: "John", age: 30 };
console.log(typeof person); // "object"
// typeof returns "object" for objects, including arrays and custom objects.

// Use Case 5: Checking Null Values
const nullValue = null;
console.log(typeof nullValue); // "object"
// A known quirk in JavaScript, typeof null returns "object" (not null).

// Use Case 6: Handling Arrays
const fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // "object"
// Arrays are also considered objects by typeof.

// Use Case 7: Differentiating between Primitives and Objects
const primitiveStr = "Hello";
const strObject = new String("World");

console.log(typeof primitiveStr); // "string"
console.log(typeof strObject); // "object"
// typeof distinguishes between primitive data types and objects.

// In Summary:
// - typeof is a unary operator to determine the data type of a value or variable.
// - It returns a string representing the data type ("number," "string," "boolean," etc.).
// - It can be used for conditional checks, especially when handling different data types.
