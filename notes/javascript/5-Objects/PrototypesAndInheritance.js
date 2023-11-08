// JavaScript Object Prototypes and Inheritance

// Prototype Chain:
const parent = {
  parentProperty: "I am from the parent",
};

const child = {
  childProperty: "I am from the child",
};

Object.setPrototypeOf(child, parent);

console.log(child.childProperty); // Child property: "I am from the child"
console.log(child.parentProperty); // Parent property: "I am from the parent"

// In this example, we create a prototype chain where 'child' inherits from 'parent'.

// Constructor Functions:
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Dog");

console.log(dog.name); // Property from constructor: "Dog"
dog.makeSound(); // Method from prototype: "Dog makes a sound"

// Constructor functions are used to create objects with shared methods through prototypes.

// Class Inheritance (ES6):
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const redCircle = new Circle("red", 5);

console.log(redCircle.getColor()); // Color: "red"
console.log(redCircle.getArea()); // Area: 78.53981633974483

// ES6 classes allow creating inheritance relationships using 'extends' and 'super'.

// In Summary:
// - Prototype chains allow objects to inherit properties from their prototypes.
// - Constructor functions can be used to create objects with shared methods through prototypes.
// - ES6 classes provide a more convenient way to work with inheritance and prototypes.
