// Use Case 1: Basic Template Literal
const name = "Alice";
console.log(`Hello, ${name}!`);
// Output: Hello, Alice!

// Use Case 2: Multiline Strings
const message = `
  This is a
  multiline
  string.`;
console.log(message);
// Output:
//   This is a
//   multiline
//   string.

// Use Case 3: Expression Evaluation
const num1 = 5;
const num2 = 7;
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
// Output: The sum of 5 and 7 is 12.

// Use Case 4: Tagged Template Literal
function customTag(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

const item = "apple";
const price = 1.25;
const totalPrice = customTag`You have selected ${item} at $${price}.`;
console.log(totalPrice);
// Output: You have selected apple at $1.25.

// Use Case 5: Template Literals in Functions
function greet(name) {
  return `Hello, ${name}!`;
}

const userName = "Bob";
console.log(greet(userName));
// Output: Hello, Bob!

// In Summary:
// - Template literals, denoted by backticks (`), allow you to create strings with placeholders.
// - You can embed expressions inside `${}` within template literals.
// - Template literals support multiline strings and improve readability.
// - Tagged template literals enable custom string processing.
