// Use Case 1: Basic Parsing
const stringValue = "3.14";
const parsedValue = parseFloat(stringValue);
console.log(parsedValue); // 3.14
// parseFloat parses a string and converts it to a floating-point number.

// Use Case 2: Handling Invalid Input
const invalidValue = "ABC";
const parsedInvalidValue = parseFloat(invalidValue);
console.log(parsedInvalidValue); // NaN
// When parsing fails due to invalid input, parseFloat returns NaN (Not-a-Number).

// Use Case 3: Truncating Extra Decimal Places
const floatValue = 3.14159265359;
const truncatedValue = parseFloat(floatValue.toFixed(2));
console.log(truncatedValue); // 3.14
// parseFloat can be used to truncate a floating-point number to a specified number of decimal places.

// Use Case 4: Parsing from User Input
const userInput = prompt("Enter a number:");
const parsedUserInput = parseFloat(userInput);
if (!isNaN(parsedUserInput)) {
  console.log("Parsed value:", parsedUserInput);
} else {
  console.log("Invalid input. Please enter a number.");
}
// parseFloat is often used to parse numeric input from users and handle validation.

// Use Case 5: Parsing in a Loop
const values = ["2.5", "3.7", "4.2"];
const parsedValues = values.map((value) => parseFloat(value));
console.log(parsedValues); // [2.5, 3.7, 4.2]
// You can use parseFloat in a loop to parse an array of strings into an array of numbers.

// In Summary:
// - parseFloat parses a string and returns a floating-point number.
// - It can handle both valid and invalid input, returning NaN for invalid input.
// - You can use it for basic parsing, truncating decimal places, or parsing user input.
// - Be cautious when dealing with user input; validate the parsed result to avoid unexpected behavior.
