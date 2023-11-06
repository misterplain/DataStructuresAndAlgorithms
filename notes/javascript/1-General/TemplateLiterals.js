// Template Literals in JavaScript
let name = "John";
let age = 30;

// Basic Template Literal
let basicTemplate = `Hello, my name is ${name}.`;
console.log(basicTemplate);

// Template Literal with Expressions
let expressionTemplate = `I am ${age} years old.`;
console.log(expressionTemplate);

// Multiline Template Literal
let multilineTemplate = `This is a
multiline
template literal.`;
console.log(multilineTemplate);

// Template Literal with Calculation
let sum = 5 + 3;
let calculationTemplate = `The sum of 5 and 3 is ${sum}.`;
console.log(calculationTemplate);

// Template Literal with Conditional Logic
let isAdult = true;
let conditionalTemplate = `I am ${isAdult ? "an adult" : "a minor"}.`;
console.log(conditionalTemplate);

// Template Literal with Function Calls
function greet(name) {
  return `Hello, ${name}!`;
}
let functionCallTemplate = `${greet("Alice")} Welcome!`;
console.log(functionCallTemplate);

// Template Literal with Objects and Properties
let person = { firstName: "Bob", lastName: "Smith" };
let objectTemplate = `My name is ${person.firstName} ${person.lastName}.`;
console.log(objectTemplate);

// Nested Template Literals
let nestedTemplate = `My name is ${name}, and I am ${age} years old.
  ${isAdult ? "I am an adult" : "I am a minor"}.`;
console.log(nestedTemplate);
