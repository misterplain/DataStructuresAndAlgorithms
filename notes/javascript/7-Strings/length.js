// Explanation of the length property for strings in JavaScript

// Use Case 1: Basic Usage
const text = "Hello, World!";
const length1 = text.length; // Returns the number of characters in the string
console.log(length1); // Output: 13

// Use Case 2: Empty String
const emptyString = "";
const length2 = emptyString.length; // Returns 0 for an empty string
console.log(length2); // Output: 0

// Use Case 3: Multibyte Characters
const multibyteText = "你好"; // Contains two Chinese characters
const length3 = multibyteText.length; // Returns the number of characters, not bytes
console.log(length3); // Output: 2

// Use Case 4: Unicode Surrogate Pairs
const emoji = "😀"; // Contains a smiling face emoji (composed of two Unicode characters)
const length4 = emoji.length; // Returns 2 for surrogate pairs
console.log(length4); // Output: 2

// Use Case 5: Combining Diacritical Marks
const combiningText = "é"; // Contains the letter 'e' with an acute accent
const length5 = combiningText.length; // Returns 2 for the combined characters
console.log(length5); // Output: 2

// In Summary:
// The `length` property of a string returns the number of characters in the string.
// It's important to note that in JavaScript, strings are sequences of 16-bit Unicode characters, and some characters may be composed of multiple code units.
// Therefore, the `length` property counts characters, not bytes, making it useful for various string manipulation tasks.
