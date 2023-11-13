// Use Case 1: Checking for Integer
const value1 = 42;
const isIntegerValue1 = Number.isInteger(value1);
console.log(isIntegerValue1); // true
// Number.isInteger is used to check if a value is an integer.

// Use Case 2: Checking for Non-Integer Values
const value2 = 3.14;
const isIntegerValue2 = Number.isInteger(value2);
console.log(isIntegerValue2); // false
// Number.isInteger returns false for non-integer values.

// Use Case 3: Differentiating Between Integer and Other Types
const value3 = "42";
const isIntegerValue3 = Number.isInteger(value3);
console.log(isIntegerValue3); // false
// Number.isInteger returns false for non-numeric values or values that can't be converted to integers.

// Use Case 4: Handling Negative Integers
const value4 = -7;
const isIntegerValue4 = Number.isInteger(value4);
console.log(isIntegerValue4); // true
// Number.isInteger correctly identifies negative integers as integers.

// Use Case 5: Complex Numbers and Precision
const value5 = 42.000;
const isIntegerValue5 = Number.isInteger(value5);
console.log(isIntegerValue5); // true
// Number.isInteger considers numbers with zero decimal places as integers.

// In Summary:
// - Number.isInteger checks if a value is an integer, returning true for integers and false for others.
// - It does not convert the value to an integer and is not affected by floating-point precision issues.
// - It is a reliable way to determine if a value is an integer in JavaScript.
