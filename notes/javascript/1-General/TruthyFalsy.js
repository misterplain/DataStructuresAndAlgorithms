// typeof Operator
let num = 42;
let str = "Hello";
let bool = true;
let obj = { name: "John" };
let arr = [1, 2, 3];

let typeofNum = typeof num; // "number"
let typeofStr = typeof str; // "string"
let typeofBool = typeof bool; // "boolean"
let typeofObj = typeof obj; // "object"
let typeofArr = typeof arr; // "object" (arrays are objects in JavaScript)

// Boolean Values
let isTrue = true;
let isFalse = false;

// Truthy and Falsy Values
let truthyValue = "Hello"; // truthy
let falsyValue = 0; // falsy

// Examples of Truthy Values
let truthyExample1 = "Hello" || "Fallback"; // "Hello"
let truthyExample2 = true && "It's true!"; // "It's true!"

// Examples of Falsy Values
let falsyExample1 = "" || "Fallback"; // "Fallback"
let falsyExample2 = false && "It's false!"; // false

// Using typeof with Conditional Logic
if (typeof num === "number") {
  console.log("num is a number.");
}

if (typeof str === "string") {
  console.log("str is a string.");
}

if (typeof bool === "boolean") {
  console.log("bool is a boolean.");
}

// Using Truthy/Falsy Values in Conditionals
if (truthyValue) {
  console.log("truthyValue is truthy.");
} else {
  console.log("truthyValue is falsy.");
}

if (falsyValue) {
  console.log("falsyValue is truthy.");
} else {
  console.log("falsyValue is falsy.");
}
