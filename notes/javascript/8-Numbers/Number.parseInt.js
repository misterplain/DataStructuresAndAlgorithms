// Use Case 1: Basic Parsing
const value1 = "42";
const parsedValue1 = Number.parseInt(value1);
console.log(parsedValue1); // 42
// Number.parseInt is used to parse a string as an integer.

// Use Case 2: Handling Radix (Base)
const value2 = "1010";
const parsedValue2 = Number.parseInt(value2, 2);
console.log(parsedValue2); // 10
// You can specify the radix (base) for parsing binary, octal, or hexadecimal numbers.

// Use Case 3: Handling Invalid Parsing
const value3 = "abc";
const parsedValue3 = Number.parseInt(value3);
console.log(parsedValue3); // NaN
// When parsing fails due to invalid input, Number.parseInt returns NaN (Not-a-Number).

// Use Case 4: Parsing with Leading and Trailing Spaces
const value4 = "  123  ";
const parsedValue4 = Number.parseInt(value4);
console.log(parsedValue4); // 123
// Number.parseInt trims leading and trailing white spaces before parsing.

// Use Case 5: Handling Sign (+/-)
const value5 = "-42";
const parsedValue5 = Number.parseInt(value5);
console.log(parsedValue5); // -42
// Number.parseInt correctly handles negative numbers.

// In Summary:
// - Number.parseInt parses a string into an integer.
// - You can specify the radix (base) for parsing non-decimal numbers.
// - It returns NaN for invalid input or when parsing fails.
// - It trims leading and trailing white spaces before parsing.
// - It correctly handles positive and negative numbers.
