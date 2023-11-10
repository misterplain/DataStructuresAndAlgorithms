// Explanation of the search function for strings in JavaScript

// Use Case 1: Basic Search
const text1 = "Hello, World!";
const result1 = text1.search("World"); // Search for "World" in the text
console.log(result1); // Output: 7 (index of the first character of the found substring)

// Use Case 2: Regular Expression Search
const text2 = "JavaScript is fun and JavaScript is powerful!";
const result2 = text2.search(/JavaScript/g); // Search for "JavaScript" using a regex pattern
console.log(result2); // Output: 0 (index of the first occurrence)

// Use Case 3: Case-Insensitive Search
const text3 = "JavaScript is case-sensitive";
const result3 = text3.search(/javascript/i); // Case-insensitive search for "javascript"
console.log(result3); // Output: 0 (index of the first occurrence, case-insensitive)

// Use Case 4: No Match Found
const text4 = "Searching for something";
const result4 = text4.search("nothing"); // Search for "nothing" (not found)
console.log(result4); // Output: -1 (when no match is found)

// In Summary:
// The `search` function is used to search for a specified substring or regex pattern within a string.
// It returns the index of the first occurrence of the match or -1 if not found.
// Regular expressions can be used for more complex pattern matching.
// It's similar to the `indexOf` function, but it can accept regular expressions.
