// Explanation of the startsWith and endsWith functions for strings in JavaScript

// Use Case 1: Basic startsWith
const str1 = "Hello, World!";
const startsWithHello = str1.startsWith("Hello"); // Checks if the string starts with "Hello"
console.log(startsWithHello); // Output: true

// Use Case 2: Basic endsWith
const endsWithWorld = str1.endsWith("World!"); // Checks if the string ends with "World!"
console.log(endsWithWorld); // Output: true

// Use Case 3: Case Sensitivity
const str2 = "JavaScript is awesome";
const startsWithjs = str2.startsWith("js"); // Case-sensitive check for "js"
console.log(startsWithjs); // Output: false

// Use Case 4: Checking for Prefix and Suffix
const filename = "document.txt";
const isDocFile = filename.endsWith(".doc"); // Checks if the file name ends with ".doc"
console.log(isDocFile); // Output: false

// Use Case 5: Using with Variables
const searchString = "The quick brown fox";
const searchTerm = "quick";
const containsTerm = searchString.startsWith(searchTerm); // Check if the searchString starts with the searchTerm
console.log(containsTerm); // Output: true

// Use Case 6: Checking for Empty String
const emptyString = "";
const isEmpty = emptyString.startsWith("anything"); // Check if an empty string starts with anything
console.log(isEmpty); // Output: false

// In Summary:
// The `startsWith` function checks if a string starts with a specified substring.
// The `endsWith` function checks if a string ends with a specified substring.
// Both functions return a boolean value (true or false) based on the check result.
// These functions are useful for various scenarios, such as validating file extensions, searching for prefixes, or checking string content.
