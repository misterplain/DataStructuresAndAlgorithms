// Explanation of the indexOf function for strings in JavaScript

// Use Case 1: Basic indexOf
const str1 = "Hello, World!";
const indexOfHello = str1.indexOf("Hello"); // Find the index of "Hello" in the string
console.log(indexOfHello); // Output: 0 (index of "H")

// Use Case 2: Finding the First Occurrence
const str2 = "JavaScript is awesome and JavaScript is fun!";
const firstIndexOfJS = str2.indexOf("JavaScript"); // Find the index of the first occurrence of "JavaScript"
console.log(firstIndexOfJS); // Output: 0 (index of the first "J")

// Use Case 3: Case Sensitivity
const str3 = "JavaScript is case-sensitive";
const indexOfjs = str3.indexOf("js"); // Case-sensitive search for "js"
console.log(indexOfjs); // Output: -1 (not found)

// Use Case 4: Finding Substring in a Range
const str4 = "Searching for 'substring' in this text.";
const indexOfSubstring = str4.indexOf("substring", 15); // Find "substring" starting from index 15
console.log(indexOfSubstring); // Output: 25 (index of the second "substring")

// Use Case 5: Searching for Nonexistent Substring
const str5 = "This is a sample string";
const indexOfNonexistent = str5.indexOf("missing"); // Find "missing" (which doesn't exist)
console.log(indexOfNonexistent); // Output: -1 (not found)

// Use Case 6: Using with Variables
const searchString = "The quick brown fox jumps over the lazy dog";
const searchTerm = "brown";
const indexOfTerm = searchString.indexOf(searchTerm); // Find the index of "brown"
console.log(indexOfTerm); // Output: 10 (index of "b" in "brown")

// In Summary:
// The `indexOf` function searches for the first occurrence of a specified substring within a string.
// It returns the index of the first character of the found substring or -1 if the substring is not found.
// You can optionally provide a second parameter to start the search from a specific position in the string.
