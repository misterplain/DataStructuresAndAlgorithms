// Use Case 1: Creating a Boolean Value
const trueValue = new Boolean(true);
console.log(trueValue); // [Boolean: true]
// The Boolean constructor is used to create a Boolean object with a true or false value.

// Use Case 2: Evaluating Truthiness
const str = "Hello";
const isTruthy = new Boolean(str);
console.log(isTruthy); // [Boolean: true]
// When a non-empty string is passed to the Boolean constructor, it evaluates to true.

// Use Case 3: Evaluating Falsiness
const num = 0;
const isFalsy = new Boolean(num);
console.log(isFalsy); // [Boolean: false]
// When the number 0 is passed to the Boolean constructor, it evaluates to false.

// Use Case 4: Comparing Objects
const obj1 = { key: "value" };
const obj2 = { key: "value" };
const isEqual = new Boolean(obj1 === obj2);
console.log(isEqual); // [Boolean: false]
// The Boolean constructor can be used to compare objects for equality.

// Use Case 5: Conditional Checks
const hasData = new Boolean(getData()); // Assume getData() fetches data.
if (hasData) {
  console.log("Data is available.");
} else {
  console.log("No data found.");
}
// You can use Boolean objects in conditional checks to determine truthiness or falsiness.

// Use Case 6: Checking the Constructor
const item = new Boolean(true);
if (item.constructor === Boolean) {
  console.log("item is a Boolean object.");
} else {
  console.log("item is not a Boolean object.");
}

// In Summary:
// - The Boolean constructor is used to create Boolean objects.
// - It can be used to explicitly convert values into Boolean objects.
// - Non-empty strings and non-zero numbers evaluate to true.
// - It's often used for conditional checks and object comparisons.
