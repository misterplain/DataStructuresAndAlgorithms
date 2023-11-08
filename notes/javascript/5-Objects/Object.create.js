// Object.create in JavaScript

// Basic Usage:
const person = {
    name: "John",
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    },
  };
  
  const john = Object.create(person);
  
  john.sayHello();
  // Output: Hello, my name is John.
  
  // Object.create creates a new object with the specified prototype object (person in this case).
  
  // Inheriting Properties:
  john.age = 30;
  
  console.log(john.age);
  // Output: 30
  
  // You can add new properties to the created object.
  
  // Prototype Chain:
  console.log(john.hasOwnProperty("age"));
  // Output: true
  
  console.log(john.hasOwnProperty("name"));
  // Output: false
  
  // Properties added to the created object are considered own properties.
  // Properties from the prototype chain are inherited.
  
  // Changing Prototype Properties:
  person.name = "Alice";
  
  john.sayHello();
  // Output: Hello, my name is Alice.
  
  // Changes to the prototype object reflect in objects created from it.
  
  // In Summary:
  // - Object.create is used to create a new object with the specified prototype object.
  // - It allows for property inheritance through the prototype chain.
  // - Changes to the prototype object affect objects created from it.
  