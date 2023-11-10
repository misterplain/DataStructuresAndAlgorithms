// Explanation of the concat function for strings in JavaScript

// Use Case 1: Basic Concatenation
const str1 = "Hello";
const str2 = "World";
const result1 = str1.concat(" ", str2); // Concatenates two strings with a space in between
console.log(result1); // Output: "Hello World"

// Use Case 2: Concatenating Multiple Strings
const firstName = "John";
const middleName = "Doe";
const lastName = "Smith";
const result2 = firstName.concat(" ", middleName, " ", lastName); // Concatenates multiple strings
console.log(result2); // Output: "John Doe Smith"

// Use Case 3: Concatenating with Variables
const word = "Concatenate";
const suffix = "ation";
const result3 = word.concat(suffix); // Concatenates a string and a variable
console.log(result3); // Output: "Concatenation"

// Use Case 4: Combining with + Operator
const phrase1 = "I love";
const phrase2 = " JavaScript";
const result4 = phrase1 + phrase2; // Concatenation using the + operator
console.log(result4); // Output: "I love JavaScript"

// In Summary:
// The `concat` function in JavaScript is used to concatenate multiple strings together.
// It can take one or more string arguments and returns a new string that is the result of joining them.
// This function is handy for combining strings and creating more complex strings from smaller parts.
