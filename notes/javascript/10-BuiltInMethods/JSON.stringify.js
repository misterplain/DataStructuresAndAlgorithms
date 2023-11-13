// Use Case 1: Converting an Object to a JSON String
const person = { name: "John", age: 30 };
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: '{"name":"John","age":30}'
// JSON.stringify() converts a JavaScript object into a JSON string.

// Use Case 2: Converting an Array to a JSON String
const numbers = [1, 2, 3, 4, 5];
const jsonArrayString = JSON.stringify(numbers);
console.log(jsonArrayString); // Output: '[1,2,3,4,5]'
// JSON.stringify() can also convert JavaScript arrays into JSON arrays.

// Use Case 3: Handling Objects with Functions
const objWithFunction = { name: "Alice", greet: function() { console.log("Hello!"); } };
const jsonStringWithFunction = JSON.stringify(objWithFunction);
console.log(jsonStringWithFunction); // Output: '{"name":"Alice"}'
// JSON.stringify() excludes functions when converting an object to JSON.

// Use Case 4: Pretty-Printing JSON
const complexObject = { name: "Bob", address: { city: "Los Angeles", zip: "90001" } };
const prettyJsonString = JSON.stringify(complexObject, null, 2);
console.log(prettyJsonString);
// Output:
// '{
//   "name": "Bob",
//   "address": {
//     "city": "Los Angeles",
//     "zip": "90001"
//   }
// }'
// JSON.stringify() can format JSON with spacing and indentation for readability.

// Use Case 5: Custom Serialization with a replacer Function
const customObject = { name: "Eve", age: 25, secret: "hidden data" };
const customJsonString = JSON.stringify(customObject, (key, value) => {
  if (key === "secret") return undefined; // Exclude the "secret" property
  return value;
});
console.log(customJsonString); // Output: '{"name":"Eve","age":25}'
// JSON.stringify() allows you to customize serialization with a replacer function.

// In Summary:
// - JSON.stringify() converts JavaScript objects or arrays into JSON strings.
// - Functions and properties with undefined values are excluded by default.
// - You can pretty-print JSON with formatting options.
// - A replacer function can be used for custom serialization.
