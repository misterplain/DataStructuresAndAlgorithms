// Explanation of the match function for strings in JavaScript

// Use Case 1: Basic match
const text1 = "Hello, World!";
const match1 = text1.match("World"); // Find the match for "World" in the string
console.log(match1); // Output: ["World"]

// Use Case 2: Finding All Matches
const text2 = "JavaScript is fun and JavaScript is powerful!";
const match2 = text2.match(/JavaScript/g); // Find all occurrences of "JavaScript" using regex
console.log(match2); // Output: ["JavaScript", "JavaScript"]

// Use Case 3: Case-Insensitive Match
const text3 = "JavaScript is case-sensitive";
const match3 = text3.match(/javascript/i); // Case-insensitive search for "javascript" using regex
console.log(match3); // Output: ["JavaScript"]

// Use Case 4: Using Capture Groups
const text4 = "John Doe (Age: 30), Jane Smith (Age: 25)";
const match4 = text4.match(/\(([^)]+)\)/g); // Find text within parentheses
console.log(match4); // Output: ["(Age: 30)", "(Age: 25)"]

// Use Case 5: Using Global and Capture Groups
const text5 = "Colors: Red, Green, Blue";
const match5 = text5.match(/(\w+),?/g); // Find words separated by commas
console.log(match5); // Output: ["Red,", "Green,", "Blue"]

// Use Case 6: No Match Found
const text6 = "This is a sample text";
const match6 = text6.match("missing"); // Search for "missing" (which doesn't exist)
console.log(match6); // Output: null

// In Summary:
// The `match` function is used to search for a specified pattern in a string.
// It returns an array of matches or null if no matches are found.
// You can use regular expressions (regex) for more complex pattern matching.
// The "g" flag in regex enables global search, and capture groups can be used to extract specific parts of the matches.
