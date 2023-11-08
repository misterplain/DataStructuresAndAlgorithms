// ES6 Classes in JavaScript

// Basic Class Declaration:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const john = new Person("John", 30);
john.sayHello();

// ES6 classes provide a way to define constructor functions and methods in a more structured manner.

// Class Inheritance:
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor.
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const alice = new Student("Alice", 25, "A");
alice.sayHello();
alice.study();

// You can create subclasses that inherit properties and methods from a parent class.

// Static Methods:
class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }
}

console.log(Calculator.add(5, 3)); // 8

// Static methods are called on the class itself, not on instances.

// In Summary:
// - ES6 classes provide a more structured way to define constructor functions and methods.
// - You can use class inheritance to create subclasses.
// - Static methods are called on the class, not on instances.
