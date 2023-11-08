// Object.keys in JavaScript

// Basic Usage:
const person = {
    name: "John",
    age: 30,
  };
  
  const keys = Object.keys(person);
  
  console.log(keys); // Output: ["name", "age"]
  
  // Object.keys returns an array of the object's own enumerable property names.
  
  // Iterating through Object.keys:
  for (const key of keys) {
    console.log(`${key}: ${person[key]}`);
  }
  // Output:
  // name: John
  // age: 30
  
  // You can use Object.keys to loop through the object's properties.
  
  // Filtering properties:
  const vehicle = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
  };
  
  const filteredKeys = Object.keys(vehicle).filter((key) => key !== "color");
  
  console.log(filteredKeys); // Output: ["brand", "model", "year"]
  
  // Object.keys can be used to filter or manipulate property names.
  
  // Getting the number of properties:
  const numProperties = Object.keys(vehicle).length;
  
  console.log(numProperties); // Output: 4
  
  // Object.keys can help you get the number of properties in an object.
  
  // In Summary:
  // - Object.keys returns an array of an object's own enumerable property names.
  // - It's useful for iterating through properties or performing operations on property names.
  // - It does not include inherited properties from prototypes.
  