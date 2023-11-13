// Use Case 1: Basic Usage
const value1 = 42;
const result1 = isNaN(value1);
console.log(result1); // false
// The isNaN function checks if the given value is NaN (Not-a-Number).

// Use Case 2: Using with NaN
const value2 = NaN;
const result2 = isNaN(value2);
console.log(result2); // true
// When applied to NaN, isNaN returns true, indicating that it is indeed NaN.

// Use Case 3: Handling Strings
const value3 = "Hello";
const result3 = isNaN(value3);
console.log(result3); // true
// If you pass a non-numeric string, isNaN returns true.

// Use Case 4: Coercion
const value4 = "42";
const result4 = isNaN(value4);
console.log(result4); // false
// JavaScript coerces the string "42" to a number before checking, so it's considered a number, not NaN.

// Use Case 5: Parsing Numbers
const value5 = "42.5";
const result5 = isNaN(Number(value5));
console.log(result5); // false
// You can parse strings into numbers and then use isNaN.

// Use Case 6: Object Conversions
const value6 = {};
const result6 = isNaN(value6);
console.log(result6); // true
// For non-primitive values like objects, isNaN returns true.

// In Summary:
// - isNaN checks if a value is NaN.
// - It returns true for actual NaN values.
// - It returns false for numbers, even if they are in string form.
// - It returns true for non-numeric values and non-primitive objects.
