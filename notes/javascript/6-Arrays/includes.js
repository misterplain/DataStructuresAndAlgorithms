// Example 1: Checking if an array contains an element
const numbers = [1, 2, 3, 4, 5];
const searchElement = 3;
const isFound = numbers.includes(searchElement);
console.log(isFound); // Output: true

// Example 2: Checking if a string contains a substring
const sentence = 'Hello, world!';
const searchString = 'world';
const containsSubstring = sentence.includes(searchString);
console.log(containsSubstring); // Output: true

// Example 3: Case-sensitive comparison for strings
const text = 'JavaScript is fun';
const searchStr = 'javascript';
const isCaseSensitive = text.includes(searchStr);
console.log(isCaseSensitive); // Output: false

// In Summary:
// - The `includes` method checks for the presence of an element or substring.
// - For arrays, it returns `true` if the element is found, and `false` otherwise.
// - For strings, it returns `true` if the substring is found, and `false` otherwise.
// - By default, it performs a case-sensitive comparison for strings.
