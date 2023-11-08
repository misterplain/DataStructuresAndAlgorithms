// Object.assign in JavaScript

// Basic Usage:
const source = { name: "John", age: 30 };
const target = {};

Object.assign(target, source);

console.log(target);
// Output: { name: 'John', age: 30 }

// Object.assign copies properties from the source object to the target object.

// Merging Objects:
const person = { name: "Alice" };
const details = { age: 25, country: "USA" };

const merged = Object.assign({}, person, details);

console.log(merged);
// Output: { name: 'Alice', age: 25, country: 'USA' }

// You can merge multiple objects into a single object.

// Overwriting Properties:
const user = { username: "john_doe", email: "john@example.com" };
const updates = { email: "john.doe@example.com" };

const updatedUser = Object.assign({}, user, updates);

console.log(updatedUser);
// Output: { username: 'john_doe', email: 'john.doe@example.com' }

// Object.assign overwrites properties with the same name in the target object.

// In Summary:
// - Object.assign is used to copy properties from source objects to a target object.
// - It can merge multiple objects into a single object.
// - Properties with the same name in the target object will be overwritten.
// - It only performs a shallow copy, so nested objects are not deeply cloned.
