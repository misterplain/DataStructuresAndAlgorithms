// Use Case 1: Basic Parsing
const value1 = "3.14";
const parsedValue1 = Number.parseFloat(value1);
console.log(parsedValue1); // 3.14
// Number.parseFloat is used to parse a string as a floating-point number.

// Use Case 2: Parsing Integers
const value2 = "42";
const parsedValue2 = Number.parseFloat(value2);
console.log(parsedValue2); // 42
// Number.parseFloat can parse integers as well, returning the same value.

// Use Case 3: Handling Invalid Parsing
const value3 = "abc";
const parsedValue3 = Number.parseFloat(value3);
console.log(parsedValue3); // NaN
// When parsing fails due to invalid input, Number.parseFloat returns NaN (Not-a-Number).

// Use Case 4: Parsing with Leading and Trailing Spaces
const value4 = "  7.5  ";
const parsedValue4 = Number.parseFloat(value4);
console.log(parsedValue4); // 7.5
// Number.parseFloat trims leading and trailing white spaces before parsing.

// Use Case 5: Handling Exponential Notation
const value5 = "2.5e3";
const parsedValue5 = Number.parseFloat(value5);
console.log(parsedValue5); // 2500
// Number.parseFloat correctly parses numbers in exponential notation.

// In Summary:
// - Number.parseFloat parses a string into a floating-point number.
// - It returns NaN for invalid input or when parsing fails.
// - It trims leading and trailing white spaces before parsing.
// - It handles numbers in exponential notation correctly.
