// Explanation of the charAt function for strings in JavaScript

// Use Case 1: Basic Usage
const text = "Hello";
const char1 = text.charAt(0); // Returns the character at the specified index (0-based)
console.log(char1); // Output: "H"

// Use Case 2: Accessing Characters
const sampleString = "JavaScript";
const char2 = sampleString.charAt(4); // Returns the character "S" at index 4
console.log(char2); // Output: "S"

// Use Case 3: Out-of-Range Index
const str = "Example";
const char3 = str.charAt(10); // Returns an empty string if the index is out of range
console.log(char3); // Output: ""

// Use Case 4: Combining with a Loop
const sentence = "This is a sample sentence";
for (let i = 0; i < sentence.length; i++) {
  const char = sentence.charAt(i);
  console.log(char); // Outputs each character in the string
}

// In Summary:
// The `charAt` function allows you to retrieve the character at a specified index within a string.
// It's useful for accessing individual characters in a string, and it returns an empty string if the index is out of range.
