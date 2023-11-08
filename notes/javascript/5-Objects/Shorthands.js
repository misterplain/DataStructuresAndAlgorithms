// JavaScript Object Property Shorthands

// Basic Property Shorthand:
const name = "Alice";
const age = 30;

const person = { name, age };

console.log(person.name); // Property shorthand: "Alice"
console.log(person.age); // Property shorthand: 30

// In this example, property shorthands allow creating an object with existing variables.

// Computed Property Names:
const propertyName = "favoriteColor";
const propertyValue = "blue";

const user = {
  username: "jsDev",
  [propertyName]: propertyValue,
};

console.log(user.favoriteColor); // Computed property: "blue"

// You can use computed property names to create properties dynamically.

// Object Method Shorthand:
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // Object method shorthand: 8

// In this example, object method shorthands simplify method definition.

// Object Property Shorthand in Functions:
function createPerson(name, age) {
  return { name, age };
}

const person1 = createPerson("Bob", 25);
console.log(person1); // Property shorthand in function: { name: 'Bob', age: 25 }

// You can use property shorthand when returning objects from functions.

// In Summary:
// - Property shorthands allow creating objects with concise syntax.
// - Computed property names enable dynamic property creation.
// - Object method shorthands simplify method definition.
// - Property shorthands can also be used when returning objects from functions.
