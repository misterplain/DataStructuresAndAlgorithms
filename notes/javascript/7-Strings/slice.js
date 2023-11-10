// Explanation of the slice function for strings in JavaScript

// Use Case 1: Basic Slicing
const text1 = "Hello, World!";
const result1 = text1.slice(0, 5); // Slice from index 0 to 5 (exclusive)
console.log(result1); // Output: "Hello"

// Use Case 2: Slicing from a Negative Index
const text2 = "JavaScript";
const result2 = text2.slice(-3); // Slice from the last 3 characters
console.log(result2); // Output: "ipt"

// Use Case 3: Slicing with Negative Start and End
const text3 = "Web Development";
const result3 = text3.slice(-6, -1); // Slice from the last 6 characters to the last character (exclusive)
console.log(result3); // Output: "opmen"

// Use Case 4: Slicing without End Index
const text4 = "Programming";
const result4 = text4.slice(4); // Slice from index 4 to the end of the string
console.log(result4); // Output: "amming"

// Use Case 5: No Change to Original String
const text5 = "Data Science";
const result5 = text5.slice(); // No arguments provided, creates a copy of the original string
console.log(result5); // Output: "Data Science"

// In Summary:
// The `slice` function is used to extract a portion of a string.
// It takes two arguments, start and end (optional), and returns a new string.
// If the start is negative, it counts from the end of the string.
// If no end is provided, it goes until the end of the string.
// The original string remains unchanged.
