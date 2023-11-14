// Use Case 1: Spreading Elements of an Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Use Case 2: Spreading Elements of an Object (Shallow Copy)
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

// Use Case 3: Combining Arrays
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];
const foodItems = [...fruits, ...vegetables];
console.log(foodItems); // Output: ["apple", "banana", "carrot", "broccoli"]

// Use Case 4: Copying an Array
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // Output: [1, 2, 3]
console.log(originalArray === copyArray); // Output: false (different reference)

// Use Case 5: Spreading Arguments into a Function
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

// Use Case 6: Merging Objects (Shallow Copy)
const person = { name: "Alice" };
const details = { age: 30, city: "New York" };
const mergedPerson = { ...person, ...details };
console.log(mergedPerson);
// Output: { name: "Alice", age: 30, city: "New York" }

// In Summary:
// - Spread syntax, represented by `...`, is used to spread elements from an iterable (like arrays or objects) into another array or object.
// - It allows you to easily combine or copy elements from one iterable into another.
// - When spreading an object, it creates a shallow copy, which means nested objects are still referenced.
// - It is often used for creating new arrays/objects, copying existing ones, or passing multiple arguments to functions.
