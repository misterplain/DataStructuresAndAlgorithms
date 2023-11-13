// Use Case 1: Parsing a Simple JSON String
const jsonString = '{"name": "John", "age": 30}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: "John"
console.log(parsedObject.age);  // Output: 30
// JSON.parse() converts a JSON string into a JavaScript object.

// Use Case 2: Parsing an Array from JSON
const jsonArrayString = '[1, 2, 3, 4, 5]';
const parsedArray = JSON.parse(jsonArrayString);
console.log(parsedArray); // Output: [1, 2, 3, 4, 5]
// JSON.parse() can also parse JSON arrays into JavaScript arrays.

// Use Case 3: Handling Complex Nested JSON
const complexJsonString = '{"person": {"name": "Alice", "address": {"city": "New York"}}}';
const parsedComplexObject = JSON.parse(complexJsonString);
console.log(parsedComplexObject.person.name); // Output: "Alice"
console.log(parsedComplexObject.person.address.city); // Output: "New York"
// JSON.parse() handles nested JSON structures seamlessly.

// Use Case 4: Handling JSON with Date Strings
const dateJsonString = '{"dateOfBirth": "2023-11-03T12:34:56.789Z"}';
const parsedDateObject = JSON.parse(dateJsonString);
console.log(parsedDateObject.dateOfBirth instanceof Date); // Output: false
// JSON.parse() does not automatically convert date strings to Date objects.

// Use Case 5: Custom Parsing with reviver Function
const customJsonString = '{"name": "John", "age": 30, "__private": "sensitive data"}';
const customParsedObject = JSON.parse(customJsonString, (key, value) => {
  if (key.startsWith("__")) return undefined; // Remove private properties
  return value;
});
console.log(customParsedObject.__private); // Output: undefined
// JSON.parse() allows you to customize parsing with a reviver function.

// In Summary:
// - JSON.parse() converts a JSON string into a JavaScript object or array.
// - It can handle nested JSON structures and custom parsing with a reviver function.
// - Be cautious when parsing JSON with date strings, as they are not automatically converted to Date objects.
// - Avoid parsing untrusted or potentially malicious JSON data.
