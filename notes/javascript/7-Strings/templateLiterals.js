// Basic string interpolation with variables
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, Alice!"

// Evaluating expressions within a template literal
const num1 = 5;
const num2 = 3;
const result = `${num1} + ${num2} equals ${num1 + num2}.`;
console.log(result); // Output: "5 + 3 equals 8."

// Using template literals for multiline strings
const multiLineText = `
  This is a
  multiline
  string.`;
console.log(multiLineText);
/*
Output:
  This is a
  multiline
  string.
*/

// Escaping backticks within template literals
const escapedText = `You can use \`\${name}\` to insert variables.`;
console.log(escapedText); // Output: "You can use `${name}` to insert variables."

// Using template literals with function calls
const capitalize = (str) => str.toUpperCase();
const originalText = "hello";
const modifiedText = `${capitalize(originalText)} world!`;
console.log(modifiedText); // Output: "HELLO world!"
