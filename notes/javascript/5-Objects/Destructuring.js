// JavaScript Object Destructuring

// Basic Destructuring:
const person = { name: "Alice", age: 30 };
const { name, age } = person;

console.log(name); // Destructured property: "Alice"
console.log(age); // Destructured property: 30

// In this example, we're extracting 'name' and 'age' properties from 'person'.

// Renaming Destructured Properties:
const user = { username: "jsDev", email: "jsdev@example.com" };
const { username: alias, email: userEmail } = user;

console.log(alias); // Renamed property: "jsDev"
console.log(userEmail); // Renamed property: "jsdev@example.com"

// You can rename destructured properties using colon syntax.

// Default Values in Destructuring:
const settings = { theme: "light" };
const { theme, fontSize = "16px" } = settings;

console.log(theme); // Destructured property: "light"
console.log(fontSize); // Default value: "16px"

// You can provide default values for properties that might be undefined.

// Nested Object Destructuring:
const order = {
  orderID: 123,
  product: {
    name: "Widget",
    price: 10,
  },
};

const { orderID, product: { name: productName, price: productPrice } } = order;

console.log(orderID); // Destructured property: 123
console.log(productName); // Destructured property: "Widget"
console.log(productPrice); // Destructured property: 10

// Destructuring can be nested to extract properties from nested objects.

// Array Destructuring with Rest Operator:
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Destructured element: 1
console.log(second); // Destructured element: 2
console.log(rest); // Rest of the elements: [3, 4, 5]

// Array destructuring can also use the rest operator to capture remaining elements.

// In Summary:
// - Object destructuring allows you to extract properties from objects easily.
// - You can rename destructured properties and provide default values.
// - Nested object destructuring is useful for extracting properties from nested objects.
// - Array destructuring can be used with the rest operator to capture remaining elements.
