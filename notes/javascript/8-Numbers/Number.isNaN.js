// Use Case 1: Checking for NaN
const value1 = NaN;
const isNanValue1 = Number.isNaN(value1);
console.log(isNanValue1); // true
// Number.isNaN is used to check if a value is NaN.

// Use Case 2: Checking for Non-NaN Values
const value2 = 42;
const isNanValue2 = Number.isNaN(value2);
console.log(isNanValue2); // false
// Number.isNaN returns false for non-NaN values.

// Use Case 3: Differentiating Between NaN and Other Types
const value3 = "Not a number";
const isNanValue3 = Number.isNaN(value3);
console.log(isNanValue3); // false
// Number.isNaN returns false for non-NaN values, even if they can't be converted to a number.

// Use Case 4: Avoiding Global isNaN Confusion
const value4 = "Not a number";
const globalIsNanValue4 = isNaN(value4);
console.log(globalIsNanValue4); // true
// The global isNaN function can be confusing, as it tries to convert the value to a number first.

// Use Case 5: Handling Complex Objects
const value5 = { prop: "NaN" };
const isNanValue5 = Number.isNaN(value5.prop);
console.log(isNanValue5); // false
// Number.isNaN works well for simple types, but not for complex objects.

// In Summary:
// - Number.isNaN is specifically designed to check for NaN values.
// - It returns true only for NaN and false for any other value, including non-numeric values.
// - It is a safer alternative to the global isNaN function for checking NaN.
