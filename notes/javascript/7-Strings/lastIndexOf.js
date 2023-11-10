// Explanation of the lastIndexOf function for strings in JavaScript

// Use Case 1: Basic lastIndexOf
const str1 = "Hello, World!";
const lastIndexOfo = str1.lastIndexOf("o"); // Find the last index of "o" in the string
console.log(lastIndexOfo); // Output: 8 (index of the last "o")

// Use Case 2: Finding the Last Occurrence
const str2 = "JavaScript is awesome and JavaScript is fun!";
const lastIndexOfJS = str2.lastIndexOf("JavaScript"); // Find the last index of "JavaScript"
console.log(lastIndexOfJS); // Output: 28 (index of the last "J")

// Use Case 3: Case Sensitivity
const str3 = "JavaScript is case-sensitive";
const lastIndexOfjs = str3.lastIndexOf("js"); // Case-sensitive search for "js"
console.log(lastIndexOfjs); // Output: -1 (not found)

// Use Case 4: Finding Substring in a Range
const str4 = "Searching for 'substring' in this text. Substring is here.";
const lastIndexOfSubstring = str4.lastIndexOf("substring", 35); // Find "substring" up to index 35
console.log(lastIndexOfSubstring); // Output: 25 (index of the first "substring")

// Use Case 5: Searching for Nonexistent Substring
const str5 = "This is a sample string";
const lastIndexOfNonexistent = str5.lastIndexOf("missing"); // Find "missing" (which doesn't exist)
console.log(lastIndexOfNonexistent); // Output: -1 (not found)

// Use Case 6: Using with Variables
const searchString = "The quick brown fox jumps over the lazy dog. The dog is brown.";
const searchTerm = "brown";
const lastIndexOfTerm = searchString.lastIndexOf(searchTerm); // Find the last index of "brown"
console.log(lastIndexOfTerm); // Output: 42 (index of the last "b" in "brown")

// In Summary:
// The `lastIndexOf` function searches for the last occurrence of a specified substring within a string.
// It returns the index of the first character of the last found substring or -1 if the substring is not found.
// You can optionally provide a second parameter to limit the search within a specific range of the string.
