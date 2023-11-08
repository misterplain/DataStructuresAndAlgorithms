// Least Complex: Basic Assignment
const [a, b] = [1, 2];
console.log(a); // Output: 1
console.log(b); // Output: 2

// Using Rest Syntax (Collecting Remaining Elements)
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Swapping Variables
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x); // Output: 10
console.log(y); // Output: 5

// Default Values
const [name = 'John', age = 30] = ['Alice'];
console.log(name); // Output: 'Alice'
console.log(age); // Output: 30

// Nested Destructuring
const nestedArray = [1, [2, 3], 4];
const [m, [n, z], w] = nestedArray;
console.log(m); // Output: 1
console.log(n); // Output: 2
console.log(z); // Output: 3
console.log(w); // Output: 4

// Ignoring Values
const [p, , r] = [1, 2, 3];
console.log(p); // Output: 1
console.log(r); // Output: 3

// In Summary:
// - Array destructuring allows you to extract values from arrays and assign them to variables in a concise way.
// - You can use the rest syntax to collect remaining elements as an array.
// - Default values can be assigned to variables if the array value is undefined.
// - It works well with nested arrays and can skip values you're not interested in.
// - Array destructuring is a powerful tool for working with structured data in JavaScript.
