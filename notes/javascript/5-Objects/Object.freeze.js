// Object.freeze in JavaScript

// Basic Usage:
const person = {
    name: "John",
    age: 30,
  };
  
  Object.freeze(person);
  
  // Attempting to modify properties will have no effect:
  person.name = "Alice"; // This assignment will be ignored.
  
  console.log(person.name); // Output: "John"
  
  // Object.freeze prevents any modifications to the object and its properties.
  
  // Shallow Freeze:
  const company = {
    name: "Tech Corp",
    employees: ["Alice", "Bob", "Charlie"],
  };
  
  Object.freeze(company);
  
  // Attempting to modify the company's properties works, but...
  company.name = "New Tech Corp"; // This assignment will be ignored.
  console.log(company.name); // Output: "Tech Corp"
  
  // Attempting to modify the array inside the company will have an effect.
  company.employees.push("David"); // This is allowed.
  console.log(company.employees); // Output: ["Alice", "Bob", "Charlie", "David"]
  
  // Object.freeze only freezes the object's immediate properties, not nested objects.
  
  // Deep Freeze (Custom Function):
  function deepFreeze(obj) {
    Object.freeze(obj);
    for (const key in obj) {
      if (typeof obj[key] === "object" && !Object.isFrozen(obj[key])) {
        deepFreeze(obj[key]);
      }
    }
  }
  
  const deepCompany = {
    name: "Deep Corp",
    employees: ["Eve", "Frank", "Grace"],
    details: {
      location: "City",
      revenue: 1000000,
    },
  };
  
  deepFreeze(deepCompany);
  
  // Now, both the object and its nested properties are frozen.
  deepCompany.name = "New Deep Corp"; // This assignment will be ignored.
  deepCompany.details.location = "Town"; // This assignment will be ignored.
  
  console.log(deepCompany.name); // Output: "Deep Corp"
  console.log(deepCompany.details.location); // Output: "City"
  
  // In Summary:
  // - Object.freeze prevents modifications to an object and its immediate properties.
  // - It does not deeply freeze nested objects, but you can create a custom function for deep freezing.
  