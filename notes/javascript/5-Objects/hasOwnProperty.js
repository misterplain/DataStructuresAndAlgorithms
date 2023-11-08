// JavaScript hasOwnProperty Method in Objects

// Basic Usage:
const person = {
  name: "John",
  age: 30,
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false

// The hasOwnProperty method checks if an object has a specific property.

// Prototype Properties:
function Animal() {
  this.species = "Unknown";
}

Animal.prototype.legs = 4;

const cat = new Animal();

console.log(cat.hasOwnProperty("species")); // true
console.log(cat.hasOwnProperty("legs")); // false

// hasOwnProperty doesn't check properties in the prototype chain.

// Edge Cases:
const obj = Object.create(null); // Creating an object with no prototype.

obj.foo = "bar";

console.log(obj.hasOwnProperty("foo")); // true
console.log(obj.hasOwnProperty("toString")); // false

// The method works even for objects with no prototype.

// In Summary:
// - The hasOwnProperty method checks if an object has a specific own property.
// - It returns true if the property exists directly on the object.
// - It returns false if the property is inherited from the prototype.
