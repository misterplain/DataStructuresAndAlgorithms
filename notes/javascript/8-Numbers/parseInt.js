// parseInt in JavaScript

// Basic Usage:
// parseInt converts a string to an integer. It takes two arguments: the string to be converted and the base of the numeral system (optional).
console.log(parseInt("10")); // 10
console.log(parseInt("10", 10)); // 10

// Handling Non-Number Characters:
// If the string begins with non-numeric characters, parseInt returns NaN (Not a Number).
console.log(parseInt("abc")); // NaN

// If the string starts with numeric characters, parseInt parses until it hits a non-numeric character.
console.log(parseInt("10abc")); // 10

// Leading Zeros and Octal (Base 8) Interpretation:
// In older versions of JavaScript, a leading zero implied octal notation. In modern JavaScript, this is no longer the case.
console.log(parseInt("010")); // 10

// However, if the base is explicitly set to 8, it will interpret the number as octal.
console.log(parseInt("010", 8)); // 8

// Hexadecimal (Base 16) Numbers:
// If a string starts with "0x", parseInt interprets it as a hexadecimal number.
console.log(parseInt("0x10")); // 16

// Large Numbers and Precision:
// parseInt only handles integers, so it does not handle decimal points.
console.log(parseInt("10.5")); // 10

// Large numbers can lose precision.
console.log(parseInt("12345678901234567890")); // 12345678901234567000

// In Summary:
// parseInt is a useful function for converting strings to integers.
// It is important to remember that it reads until it encounters a non-numeric character and can interpret numbers in different bases.
// Be mindful of its limitations with large numbers and non-integer values.

