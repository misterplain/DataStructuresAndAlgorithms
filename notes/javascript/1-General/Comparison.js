// Equality (==) and Inequality (!=)
let isEqual = 5 == "5"; // true (loose equality, value comparison)
let isNotEqual = 5 != "3"; // true

// Strict Equality (===) and Strict Inequality (!==)
let isStrictEqual = 5 === 5; // true (strict equality, value and type comparison)
let isNotStrictEqual = 5 !== "5"; // true

// Greater Than (>) and Less Than (<)
let isGreaterThan = 10 > 5; // true
let isLessThan = 3 < 6; // true

// Greater Than or Equal (>=) and Less Than or Equal (<=)
let isGreaterOrEqual = 5 >= 5; // true
let isLessOrEqual = 4 <= 5; // true

// Ternary Operator (Conditional)
let result = 7 > 5 ? "Yes" : "No"; // "Yes" (conditional expression)

// Logical AND (&&) and Logical OR (||)
let logicalAnd = true && false; // false
let logicalOr = true || false; // true

// Comparison with Strings (Lexicographical Order)
let stringComparison = "apple" > "banana"; // false (compares based on lexicographical order)

// Nullish Coalescing Operator (??)
let nullishValue = null;
let defaultValue = "Default";
let resultValue = nullishValue ?? defaultValue; // "Default" (uses the right operand if the left is null or undefined)

// Type Conversion and Comparison
let typeConversionResult = 5 == "5"; // true (automatic type conversion)
let typeStrictComparisonResult = 5 === "5"; // false (strict comparison, different types)
