// Use Case 1: Math.abs() - Absolute Value
const number1 = -42;
const absoluteValue = Math.abs(number1);
console.log(absoluteValue); // 42
// Math.abs() returns the absolute (positive) value of a number.

// Use Case 2: Math.round() - Rounding
const number2 = 42.6;
const roundedValue = Math.round(number2);
console.log(roundedValue); // 43
// Math.round() rounds a number to the nearest integer.

// Use Case 3: Math.floor() - Flooring
const number3 = 42.9;
const flooredValue = Math.floor(number3);
console.log(flooredValue); // 42
// Math.floor() rounds a number down to the nearest integer.

// Use Case 4: Math.ceil() - Ceiling
const number4 = 42.1;
const ceiledValue = Math.ceil(number4);
console.log(ceiledValue); // 43
// Math.ceil() rounds a number up to the nearest integer.

// Use Case 5: Math.random() - Random Number
const randomValue = Math.random();
console.log(randomValue); // A random decimal between 0 and 1
// Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).

// Use Case 6: Math.max() - Maximum Value
const maxNumber = Math.max(10, 20, 30);
console.log(maxNumber); // 30
// Math.max() returns the largest of the provided numbers.

// Use Case 7: Math.min() - Minimum Value
const minNumber = Math.min(10, 20, 30);
console.log(minNumber); // 10
// Math.min() returns the smallest of the provided numbers.

// Use Case 8: Math.pow() - Exponentiation
const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
console.log(result); // 8
// Math.pow() calculates the base raised to the power of the exponent.

// In Summary:
// - The Math object in JavaScript provides various mathematical functions.
// - Math.abs() returns the absolute value of a number.
// - Math.round() rounds to the nearest integer.
// - Math.floor() rounds down to the nearest integer.
// - Math.ceil() rounds up to the nearest integer.
// - Math.random() generates a random decimal between 0 and 1.
// - Math.max() returns the largest of provided numbers.
// - Math.min() returns the smallest of provided numbers.
// - Math.pow() performs exponentiation.
