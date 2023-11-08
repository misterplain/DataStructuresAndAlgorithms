// Object.entries in JavaScript

// Basic Usage:
const person = {
    name: "John",
    age: 30,
  };
  
  const entries = Object.entries(person);
  
  console.log(entries);
  // Output: [["name", "John"], ["age", 30]]
  
  // Object.entries returns an array of key-value pairs (2D array).
  
  // Iterating through Object.entries:
  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
  // Output:
  // name: John
  // age: 30
  
  // You can use Object.entries to loop through key-value pairs.
  
  // Converting an array of key-value pairs back to an object:
  const keyValuePairs = [["name", "Alice"], ["age", 25]];
  const convertedObject = Object.fromEntries(keyValuePairs);
  
  console.log(convertedObject);
  // Output: { name: 'Alice', age: 25 }
  
  // Object.fromEntries converts an array of key-value pairs back to an object.
  
  // In Summary:
  // - Object.entries returns an array of key-value pairs for an object's own enumerable properties.
  // - It's useful for iterating through properties and working with key-value data.
  // - It does not include inherited properties from prototypes.
  