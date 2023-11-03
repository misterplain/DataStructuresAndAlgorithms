// 1. Undefined: Variables declared but not assigned a value.
let undefinedVar;
// Output: undefined

// 2. Null: Represents the intentional absence of any object value.
let nullVar = null;
// Output: null

// 3. Boolean: Represents true or false values.
let isTrue = true;
let isFalse = false;

// 4. Number: Represents numeric values.
let age = 25;
let price = 9.99;

// 5. String: Represents a sequence of characters.
let greeting = "Hello, World!";
let name = "John";

// 6. Symbol: Represents unique and immutable values.
const sym1 = Symbol("description");
const sym2 = Symbol("description");
// Output: false (each symbol is unique)

// 7. Object: Represents a collection of key-value pairs (properties and methods).
let person = {
  name: "Alice",
  age: 30,
};

// 8. Function: A type of object that can be called.
function add(a, b) {
  return a + b;
}

// 9. Array: A special type of object that holds an ordered list of values.
let colors = ["red", "green", "blue"];

// 10. Date: Represents date and time.
let today = new Date();

// 11. RegExp: Represents regular expressions for pattern matching.
let pattern = /abc/g;
let text = "abcdefgabc";

// 12. Map and Set: Data structures for storing key-value pairs and unique values, respectively.
let myMap = new Map();
let mySet = new Set();
