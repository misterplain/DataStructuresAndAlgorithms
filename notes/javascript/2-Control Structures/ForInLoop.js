// The for...in loop is used for iterating over the enumerable properties of an object.
// It's typically used with objects and is not recommended for arrays.

// Simple for...in loop to iterate through the properties of an object.
let person = {
    name: "John",
    age: 30,
    job: "developer",
  };
  
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // Output:
  // "name: John"
  // "age: 30"
  // "job: developer"
  
  // In this example:
  // - We use the loop variable `key` to represent each property name in the 'person' object.
  // - Inside the loop, we access the values associated with each property using `person[key]`.
  
  // The for...in loop is useful for inspecting object properties.
  
  // You can also use for...in to iterate through the properties of built-in objects like arrays.
  let colors = ["red", "green", "blue"];
  for (let index in colors) {
    console.log(`${index}: ${colors[index]}`);
  }
  // Output:
  // "0: red"
  // "1: green"
  // "2: blue"
  
  // However, it's recommended to use for...of or forEach for arrays, as for...in may not behave as expected.
  
  // Be cautious with for...in loops, as they iterate through all enumerable properties, including inherited ones.
  // You can use hasOwnProperty to filter out inherited properties.
  let car = {
    make: "Toyota",
    model: "Camry",
  };
  
  car.__proto__.year = 2020; // Adding an inherited property
  
  for (let key in car) {
    if (car.hasOwnProperty(key)) {
      console.log(`${key}: ${car[key]}`);
    }
  }
  // Output:
  // "make: Toyota"
  // "model: Camry"
  
  // In this example, we use hasOwnProperty to exclude the inherited property.
  
  // The for...in loop is mainly used for working with objects and inspecting their properties.
  