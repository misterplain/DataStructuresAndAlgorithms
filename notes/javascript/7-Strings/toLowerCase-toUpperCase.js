// Explanation of toLowerCase and toUpperCase functions for strings in JavaScript

// Use Case 1: Converting a string to lowercase
const text1 = "Hello, World!";
const lowercaseText1 = text1.toLowerCase();
console.log(lowercaseText1); // Output: "hello, world!"

// Use Case 2: Converting a string to uppercase
const text2 = "Hello, World!";
const uppercaseText2 = text2.toUpperCase();
console.log(uppercaseText2); // Output: "HELLO, WORLD!"

// Use Case 3: Working with non-alphabetic characters
const text3 = "123abcXYZ";
const lowercaseText3 = text3.toLowerCase();
const uppercaseText3 = text3.toUpperCase();
console.log(lowercaseText3); // Output: "123abcxyz"
console.log(uppercaseText3); // Output: "123ABCXYZ"

// Use Case 4: Handling special characters and accents
const text4 = "Café";
const lowercaseText4 = text4.toLowerCase();
const uppercaseText4 = text4.toUpperCase();
console.log(lowercaseText4); // Output: "café"
console.log(uppercaseText4); // Output: "CAFÉ"

// In Summary:
// The toLowerCase function converts a string to lowercase.
// The toUpperCase function converts a string to uppercase.
// They are useful for case-insensitive string comparisons and transformations.
