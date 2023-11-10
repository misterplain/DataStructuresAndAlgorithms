// Explanation of the split function for strings in JavaScript

// Use Case 1: Splitting a string by a simple delimiter (e.g., comma)
const text1 = "apple,banana,cherry";
const fruits1 = text1.split(','); // Split the string by comma
console.log(fruits1); // Output: ['apple', 'banana', 'cherry']

// Use Case 2: Splitting a string by whitespace
const text2 = "Hello World";
const words2 = text2.split(' '); // Split the string by space
console.log(words2); // Output: ['Hello', 'World']

// Use Case 3: Splitting a string with multiple delimiters (e.g., comma and space)
const text3 = "apple, banana and cherry";
const fruits3 = text3.split(/[,\s]+/); // Split the string by comma or space (regex)
console.log(fruits3); // Output: ['apple', 'banana', 'and', 'cherry']

// Use Case 4: Limiting the number of splits
const text4 = "one,two,three,four";
const parts4 = text4.split(',', 2); // Split the string by comma, limit to 2 splits
console.log(parts4); // Output: ['one', 'two']

// In Summary:
// The split function is used to split a string into an array of substrings based on a delimiter.
// It can split a string into multiple parts based on a single delimiter or a regular expression.
// You can also limit the number of splits if needed.
