// Destructuring Assignment in JavaScript

// 1. Array Destructuring
// Array destructuring allows you to extract values from arrays into separate variables.

// Example 1: Basic Array Destructuring
let numbers = [1, 2, 3];
let [first, second, third] = numbers;
console.log(first, second, third);

// Example 2: Skipping Elements
let [, , thirdValue] = numbers;
console.log(thirdValue);

// Example 3: Using Default Values
let [, , thirdValueWithDefault = 0] = numbers;
console.log(thirdValueWithDefault);

// 2. Object Destructuring
// Object destructuring allows you to extract values from objects into separate variables.

// Example 4: Basic Object Destructuring
let person = { name: "John", age: 30 };
let { name, age } = person;
console.log(name, age);

// Example 5: Renaming Variables
let { name: fullName, age: personAge } = person;
console.log(fullName, personAge);

// Example 6: Using Default Values
let { country = "Unknown" } = person;
console.log(country);

// 3. Nested Destructuring
// You can destructure nested arrays and objects.

// Example 7: Nested Array Destructuring
let nestedArray = [1, [2, 3], 4];
let [, [nested2, nested3], nested4] = nestedArray;
console.log(nested2, nested3, nested4);

// Example 8: Nested Object Destructuring
let nestedObject = {
  outer: { inner: "Nested Value" }
};
let {
  outer: { inner: nestedValue }
} = nestedObject;
console.log(nestedValue);

// 4. Destructuring in Function Parameters
// You can destructure objects directly in function parameters.

// Example 9: Function Parameter Destructuring
function printPersonInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printPersonInfo(person);

// 5. Mixed Destructuring
// You can mix array and object destructuring in one statement.

// Example 10: Mixed Destructuring
let mixedData = [1, { message: "Hello" }];
let [number, { message }] = mixedData;
console.log(number, message);
