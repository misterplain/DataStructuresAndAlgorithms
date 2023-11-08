// Object.values in JavaScript

// Basic Usage:
const person = {
    name: "John",
    age: 30,
  };
  
  const values = Object.values(person);
  
  console.log(values); // Output: ["John", 30]
  
  // Object.values returns an array of the object's own enumerable property values.
  
  // Iterating through Object.values:
  for (const value of values) {
    console.log(value);
  }
  // Output:
  // John
  // 30
  
  // You can use Object.values to loop through the object's property values.
  
  // Getting values and ignoring specific properties:
  const vehicle = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
  };
  
  const filteredValues = Object.values(vehicle).filter((value) => value !== "Blue");
  
  console.log(filteredValues); // Output: ["Toyota", "Camry", 2020]
  
  // Object.values can be used to filter or manipulate property values.
  
  // In Summary:
  // - Object.values returns an array of an object's own enumerable property values.
  // - It's useful for iterating through values or performing operations on property values.
  // - It does not include inherited properties from prototypes.
  