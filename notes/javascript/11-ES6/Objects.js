// Use Case 1: Creating an Object with Literal Syntax
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  console.log(person);
  // Output: { firstName: "John", lastName: "Doe", age: 30 }
  
  // Use Case 2: Adding Properties to an Existing Object
  person.email = "john@example.com";
  console.log(person);
  // Output: { firstName: "John", lastName: "Doe", age: 30, email: "john@example.com" }
  
  // Use Case 3: Object Destructuring
  const { firstName, lastName } = person;
  console.log(firstName, lastName); // Output: John Doe
  
  // Use Case 4: Dynamic Property Names
  const dynamicKey = "status";
  const statusObject = {
    [dynamicKey]: "active",
  };
  console.log(statusObject);
  // Output: { status: "active" }
  
  // Use Case 5: Object Methods
  const car = {
    brand: "Toyota",
    model: "Camry",
    startEngine() {
      console.log("Engine started");
    },
  };
  car.startEngine(); // Output: Engine started
  
  // Use Case 6: Object Spread Syntax
  const details = {
    ...person,
    city: "New York",
  };
  console.log(details);
  // Output: { firstName: "John", lastName: "Doe", age: 30, email: "john@example.com", city: "New York" }
  
  // In Summary:
  // - Objects in JavaScript are collections of key-value pairs, where keys are strings (property names) and values can be of any type.
  // - Object literal syntax allows you to define and initialize objects in a concise way.
  // - You can add, modify, or remove properties from an object using dot notation or square brackets.
  // - Object destructuring allows you to extract values from objects into separate variables.
  // - You can use dynamic property names and computed property names using square brackets.
  // - Objects can have methods, which are functions defined as object properties.
  // - Object spread syntax allows you to create new objects by combining properties from existing objects.
  