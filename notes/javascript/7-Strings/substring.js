// Basic Usage of substring
const str = "Hello, World!";
const substring1 = str.substring(0, 5);
console.log(substring1); // Output: "Hello"

// Using substring with a Single Argument
const substring2 = str.substring(7);
console.log(substring2); // Output: "World!"

// Handling Negative Indices
const substring3 = str.substring(-5); // Treats negative indices as 0
console.log(substring3); // Output: "Hello, World!"

// Handling Larger Start Index
const substring4 = str.substring(13); // If start index is larger, treats it as the end index
console.log(substring4); // Output: ""

// Specifying Start and End Indices
const substring5 = str.substring(7, 12);
console.log(substring5); // Output: "World"

// In Summary:
// - The `substring` method is used to extract a portion of a string based on start and end indices.
// - It returns a new string containing characters from the start index (inclusive) to the end index (exclusive).
// - If only one argument is provided, it treats it as the start index and extracts characters from there to the end of the string.
// - Negative or larger-than-string-length indices are handled gracefully.
