// Explanation of the trim function for strings in JavaScript

// Use Case 1: Basic usage
const text1 = "   Hello, World!   ";
const trimmedText1 = text1.trim();
console.log(trimmedText1); // Output: "Hello, World!"

// Use Case 2: Removing leading and trailing spaces
const text2 = "  This is a sentence.  ";
const trimmedText2 = text2.trim();
console.log(trimmedText2); // Output: "This is a sentence."

// Use Case 3: Handling tabs and newline characters
const text3 = "\tTabs and\nNewlines\t";
const trimmedText3 = text3.trim();
console.log(trimmedText3); // Output: "Tabs and\nNewlines"

// Use Case 4: No change when there are no leading/trailing spaces
const text4 = "No spaces here!";
const trimmedText4 = text4.trim();
console.log(trimmedText4); // Output: "No spaces here!"

// Use Case 5: Handling whitespace inside the string
const text5 = "   Remove   spaces   inside   ";
const trimmedText5 = text5.replace(/\s+/g, ' ').trim();
console.log(trimmedText5); // Output: "Remove spaces inside"

// In Summary:
// The trim function removes leading and trailing whitespace from a string.
// It doesn't modify the original string but returns a new trimmed string.
