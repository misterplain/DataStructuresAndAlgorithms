// Example 1: Deleting a property from an object
const person = {
    name: "Alice",
    age: 30,
  };
  
  delete person.age; // Deletes the 'age' property from the 'person' object
  console.log(person); // Output: { name: 'Alice' }
  
  // Example 2: Deleting an element from an array
  const numbers = [1, 2, 3, 4, 5];
  delete numbers[2]; // Deletes the element at index 2 (leaving it as undefined)
  console.log(numbers); // Output: [1, 2, <1 empty item>, 4, 5]
  
  // Example 3: Deleting an array element doesn't change the array length
  const fruits = ["apple", "banana", "cherry"];
  delete fruits[1]; // Deletes the element at index 1 (leaving it as undefined)
  console.log(fruits); // Output: [ 'apple', <1 empty item>, 'cherry' ]
  
  // Example 4: Deleting a variable is not allowed
  let age = 25;
  // delete age; // This will throw an error, you cannot delete variables
  
  // In Summary:
  // - The `delete` operator is used to remove properties from objects or elements from arrays.
  // - When used on an object property, it removes the property from the object.
  // - When used on an array element, it sets the element to undefined, but the array length remains the same.
  // - Deleting variables declared with `let`, `const`, or `var` is not allowed and will result in an error.
  