// Filtering Even Numbers from an Array
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Filtering Names Starting with 'A' from an Array of Strings
const names = ['Alice', 'Bob', 'Charlie', 'Anna', 'David'];
const namesStartingWithA = names.filter((name) => name.startsWith('A'));
console.log(namesStartingWithA); // Output: ['Alice', 'Anna']

// Filtering Objects Based on a Condition
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Monitor', price: 400 },
];
const affordableProducts = products.filter((product) => product.price <= 500);
console.log(affordableProducts);
// Output: [{ name: 'Phone', price: 500 }, { name: 'Tablet', price: 300 }, { name: 'Monitor', price: 400 }]

// Using filter with Index Parameter
const numbers2 = [10, 20, 30, 40, 50];
const filteredNumbers = numbers2.filter((num, index) => index % 2 === 0);
console.log(filteredNumbers); // Output: [10, 30, 50]

// In Summary:
// - The `filter` method creates a new array with all elements that pass a provided test (predicate) function.
// - It does not modify the original array.
// - The provided function should return a boolean value based on a condition.
// - `filter` is commonly used to extract elements that meet specific criteria from an array.
