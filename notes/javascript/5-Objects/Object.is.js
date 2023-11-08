// Least Complex: Strict Equality
const a = 5;
const b = 5;
const result1 = Object.is(a, b);
console.log(result1); // Output: true

// Intermediate: Special Cases
const x = NaN;
const y = 0 / 0;
const result2 = Object.is(x, y);
console.log(result2); // Output: true

// Most Complex: Handling -0 and 0
const zero1 = -0;
const zero2 = 0;
const result3 = Object.is(zero1, zero2);
console.log(result3); // Output: false

// In Summary:
// - `Object.is` is used to compare two values for equality.
// - It returns true if the values are the same, including for NaN and -0.
// - It returns false if the values are different, even for regular and -0.
