// Least Complex: Basic Usage
const person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(person, 'firstName');
  console.log(descriptor1);
  // Output:
  // {
  //   value: 'John',
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
  // }
  
  // Intermediate: Non-Enumerable Property
  Object.defineProperty(person, 'age', {
    value: 30,
    writable: false,
    enumerable: false,
    configurable: false
  });
  
  const descriptor2 = Object.getOwnPropertyDescriptor(person, 'age');
  console.log(descriptor2);
  // Output:
  // {
  //   value: 30,
  //   writable: false,
  //   enumerable: false,
  //   configurable: false
  // }
  
  // Most Complex: Inherited Property
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  const john = new Person('John', 'Doe');
  const descriptor3 = Object.getOwnPropertyDescriptor(john, 'getFullName');
  console.log(descriptor3);
  // Output:
  // {
  //   value: [Function (anonymous)],
  //   writable: true,
  //   enumerable: false,
  //   configurable: true
  // }
  
  // In Summary:
  // - `Object.getOwnPropertyDescriptor` retrieves property descriptors of an object's own properties.
  // - It returns an object containing information about a property's value, writability, enumerability, and configurability.
  // - You can use it to examine and manipulate property attributes.
  