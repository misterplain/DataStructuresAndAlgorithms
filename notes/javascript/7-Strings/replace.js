// Explanation of the replace function for strings in JavaScript

// Use Case 1: Basic replacement
const text1 = "Hello, World!";
const replaced1 = text1.replace("World", "Universe"); // Replace "World" with "Universe"
console.log(replaced1); // Output: "Hello, Universe!"

// Use Case 2: Replacing All Occurrences
const text2 = "JavaScript is fun and JavaScript is powerful!";
const replaced2 = text2.replace(/JavaScript/g, "JS"); // Replace all "JavaScript" with "JS"
console.log(replaced2); // Output: "JS is fun and JS is powerful!"

// Use Case 3: Case-Insensitive Replacement
const text3 = "JavaScript is case-sensitive";
const replaced3 = text3.replace(/javascript/i, "JS"); // Case-insensitive replace "javascript" with "JS"
console.log(replaced3); // Output: "JS is case-sensitive"

// Use Case 4: Using Capture Groups
const text4 = "John Doe (Age: 30), Jane Smith (Age: 25)";
const replaced4 = text4.replace(/\(([^)]+)\)/g, "[ $1 ]"); // Replace text within parentheses with brackets
console.log(replaced4); // Output: "John Doe [ Age: 30 ], Jane Smith [ Age: 25 ]"

// Use Case 5: Using a Function as Replacement
const text5 = "Apples are red, bananas are yellow";
const replaced5 = text5.replace(/\w+/g, (match) => match.toUpperCase()); // Replace words with uppercase
console.log(replaced5); // Output: "APPLES ARE RED, BANANAS ARE YELLOW"

// Use Case 6: Custom Replacement Function with Regex
const text6 = "42 is greater than 21";
const replaced6 = text6.replace(/(\d+)/g, (match, number) => {
  const num = parseInt(number);
  return num > 30 ? "big" : "small";
}); // Replace numbers greater than 30 with "big" and others with "small"
console.log(replaced6); // Output: "big is greater than small"

// In Summary:
// The `replace` function is used to find and replace a specified pattern in a string.
// It returns a new string with replacements.
// You can use regular expressions (regex) for pattern matching and capture groups to refer to matched substrings.
// You can also use a custom replacement function to define complex replacements.
