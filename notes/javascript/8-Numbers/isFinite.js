// Use Case 1: Basic Usage
const value1 = 42;
const result1 = isFinite(value1);
console.log(result1); // true
// The isFinite function checks if the given value is a finite number.

// Use Case 2: Using with Infinity
const value2 = Infinity;
const result2 = isFinite(value2);
console.log(result2); // false
// When applied to Infinity, isFinite returns false, indicating that it's not a finite number.

// Use Case 3: Using with NaN
const value3 = NaN;
const result3 = isFinite(value3);
console.log(result3); // false
// Similar to Infinity, isFinite returns false for NaN.

// Use Case 4: Handling Strings
const value4 = "42";
const result4 = isFinite(value4);
console.log(result4); // true
// isFinite coerces the string "42" to a number before checking, so it's considered a finite number.

// Use Case 5: Object Conversions
const value5 = {};
const result5 = isFinite(value5);
console.log(result5); // false
// For non-numeric values like objects, isFinite returns false.

// Use Case 6: Parsing Numbers
const value6 = "42.5";
const result6 = isFinite(Number(value6));
console.log(result6); // true
// You can parse strings into numbers and then use isFinite.

// In Summary:
// - isFinite checks if a value is a finite number.
// - It returns true for finite numbers, including integers and floats.
// - It returns false for Infinity, -Infinity, and NaN.
// - It returns true for numeric strings that can be converted to finite numbers.
// - It returns false for non-numeric values and non-primitive objects.
