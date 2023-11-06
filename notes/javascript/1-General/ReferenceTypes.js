// 1. Arrays (Reference Type)
// Arrays are ordered collections of values that can be of any type and are stored as reference types.
let array1 = [1, 2, 3];
let array2 = array1; // array2 now references the same array as array1

// 2. Objects (Reference Type)
// Objects are collections of key-value pairs and are used to represent complex data structures.
let person = { name: "John", age: 30 };
let copyOfPerson = person; // copyOfPerson now references the same object as person

// 3. Functions (Reference Type)
// Functions are first-class citizens in JavaScript and can be assigned to variables or passed as arguments.
function greet(name) {
  return `Hello, ${name}!`;
}
let sayHello = greet; // sayHello references the greet function

// 4. Custom Objects (User-defined Reference Types)
// You can create your own custom objects and classes using constructor functions or ES6 classes.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("Alice", 25); // person1 is an instance of the Person constructor

// 5. Arrays of Objects (Combining Reference Types)
// You can have arrays that contain objects, which can lead to more complex data structures.
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// 6. Nested Objects (Objects within Objects)
// Objects can contain other objects, creating a hierarchy of data.
let person2 = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Cityville",
  },
};

// 7. Prototypal Inheritance (Complex Object Relationships)
// JavaScript uses prototypal inheritance for object relationships, allowing objects to inherit properties and methods from other objects.
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayHello = function () {
  return `Hello, I'm ${this.name}`;
};
let cat = new Animal("Whiskers");
console.log(cat.sayHello()); // Output: Hello, I'm Whiskers
