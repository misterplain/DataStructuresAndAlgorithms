// JavaScript Object Properties and Methods

// Object with Properties:
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
  };
  
  console.log(person.name); // Accessing property: "Alice"
  console.log(person.age); // Accessing property: 30
  
  // In this example, 'person' is an object with properties like 'name' and 'age'.
  
  // Object with Methods:
  const calculator = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
  };
  
  const sum = calculator.add(5, 3); // Calling method: 8
  const difference = calculator.subtract(10, 4); // Calling method: 6
  
  console.log(sum);
  console.log(difference);
  
  // Here, 'calculator' is an object with methods 'add' and 'subtract'.
  
  // Object Constructor Function:
  function Animal(name, species) {
    this.name = name;
    this.species = species;
    
    this.speak = function() {
      console.log(`I am a ${this.species} named ${this.name}`);
    };
  }
  
  const cat = new Animal("Whiskers", "Cat");
  const dog = new Animal("Rex", "Dog");
  
  cat.speak(); // Output: "I am a Cat named Whiskers"
  dog.speak(); // Output: "I am a Dog named Rex"
  
  // Constructor functions create objects with properties and methods.
  
  // Object with Prototypes:
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.drive = function() {
    console.log(`Driving the ${this.make} ${this.model}`);
  };
  
  const honda = new Car("Honda", "Civic");
  honda.drive(); // Output: "Driving the Honda Civic"
  
  // Prototypes allow sharing methods among objects created from the same constructor.
  
  // In Summary:
  // - Objects in JavaScript can have properties (data) and methods (functions).
  // - Properties store data, and methods define behavior.
  // - Properties can be accessed using dot notation (e.g., obj.property) or bracket notation (e.g., obj["property"]).
  // - Methods are functions associated with objects and are invoked using parentheses (e.g., obj.method()).
  // - Constructor functions create objects with properties and methods.
  // - Prototypes allow sharing methods among objects created from the same constructor.
  