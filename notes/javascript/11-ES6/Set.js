// Use Case 1: Creating a New Set
const fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("cherry");
console.log(fruits); // Output: Set { 'apple', 'banana', 'cherry' }
// The Set object allows you to store unique values.

// Use Case 2: Checking for Existence
console.log(fruits.has("banana")); // Output: true
console.log(fruits.has("grape")); // Output: false
// You can use the `has` method to check if a value exists in the Set.

// Use Case 3: Removing an Item
fruits.delete("cherry");
console.log(fruits); // Output: Set { 'apple', 'banana' }
// The `delete` method removes a specific value from the Set.

// Use Case 4: Iterating Through a Set
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// 'apple'
// 'banana'
// You can use a `for...of` loop to iterate through the Set's values.

// Use Case 5: Converting Set to an Array
const fruitArray = [...fruits];
console.log(fruitArray); // Output: [ 'apple', 'banana' ]
// You can easily convert a Set to an array using the spread operator.

// Use Case 6: Size of a Set
console.log(fruits.size); // Output: 2
// The `size` property returns the number of unique values in the Set.

// Use Case 7: Initializing a Set with Values
const colors = new Set(["red", "green", "blue"]);
console.log(colors); // Output: Set { 'red', 'green', 'blue' }
// You can initialize a Set with an iterable, such as an array.

// In Summary:
// - Sets store unique values, preventing duplicates.
// - You can add, remove, check for existence, and iterate through values.
// - Sets are useful when you need to maintain a collection of unique elements.
