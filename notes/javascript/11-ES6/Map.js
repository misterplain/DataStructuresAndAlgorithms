// Use Case 1: Creating a New Map
const studentGrades = new Map();

// Use Case 2: Adding Key-Value Pairs
studentGrades.set("Alice", 95);
studentGrades.set("Bob", 87);
studentGrades.set("Charlie", 91);

// Use Case 3: Accessing Values by Key
console.log(studentGrades.get("Alice")); // Output: 95
console.log(studentGrades.get("Bob")); // Output: 87

// Use Case 4: Checking for Key Existence
console.log(studentGrades.has("Charlie")); // Output: true
console.log(studentGrades.has("David")); // Output: false

// Use Case 5: Removing a Key-Value Pair
studentGrades.delete("Alice");

// Use Case 6: Iterating Through a Map
for (const [student, grade] of studentGrades) {
  console.log(`${student}: ${grade}`);
}
// Output:
// Bob: 87
// Charlie: 91

// Use Case 7: Size of a Map
console.log(studentGrades.size); // Output: 2

// Use Case 8: Initializing a Map with Key-Value Pairs
const colors = new Map([
  ["red", "#FF0000"],
  ["green", "#00FF00"],
  ["blue", "#0000FF"],
]);

// In Summary:
// - Maps store key-value pairs, allowing you to associate values with unique keys.
// - You can add, remove, check for key existence, and iterate through entries.
// - Maps are useful when you need to maintain a collection of key-value relationships.
