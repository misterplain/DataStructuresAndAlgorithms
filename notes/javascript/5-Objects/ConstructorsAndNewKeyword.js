// JavaScript Object Constructors and 'new' Keyword

// Constructor Function:
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const john = new Person("John", 30);
  
  console.log(john.name); // "John"
  console.log(john.age); // 30
  
  // The 'new' keyword creates a new object based on the constructor function.
  
  // Constructor with Prototype:
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.makeSound = function () {
    console.log(`${this.name} makes a sound`);
  };
  
  const dog = new Animal("Dog");
  
  console.log(dog.name); // "Dog"
  dog.makeSound(); // "Dog makes a sound"
  
  // Constructors can have shared methods via prototypes.
  
  // Constructor Inheritance:
  function Bird(name, canFly) {
    Animal.call(this, name); // Call the parent constructor
    this.canFly = canFly;
  }
  
  Bird.prototype = Object.create(Animal.prototype); // Inherit methods
  
  const eagle = new Bird("Eagle", true);
  
  console.log(eagle.name); // "Eagle"
  console.log(eagle.canFly); // true
  eagle.makeSound(); // "Eagle makes a sound"
  
  // Inheritance can be achieved by calling the parent constructor and inheriting methods.
  
  // In Summary:
  // - Constructor functions are used to create objects with shared properties.
  // - The 'new' keyword creates instances of objects based on constructors.
  // - Constructors can have shared methods through prototypes.
  // - Inheritance can be achieved by calling the parent constructor and inheriting methods.
  