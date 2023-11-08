// Using splice to Remove Elements from an Array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
fruits.splice(2, 2); // Remove 2 elements starting from index 2 (cherry and date)
console.log(fruits); // Output: ['apple', 'banana', 'elderberry']

// Using splice to Replace Elements in an Array
const colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow'); // Replace 'green' with 'yellow' at index 1
console.log(colors); // Output: ['red', 'yellow', 'blue']

// Using splice to Insert Elements into an Array
const numbers = [1, 2, 4, 5];
numbers.splice(2, 0, 3); // Insert 3 at index 2 (without removing any elements)
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Removing Elements with Negative Index Using splice
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
months.splice(-2, 1); // Remove 1 element starting from the second-to-last (Mar)
console.log(months); // Output: ['Jan', 'Feb', 'Apr']

// Using splice to Copy Elements from One Array to Another
const sourceArray = [11, 12, 13, 14];
const targetArray = [21, 22];
const copiedElements = sourceArray.splice(1, 2); // Copy two elements starting from index 1
console.log(targetArray.concat(copiedElements)); // Output: [21, 22, 12, 13]

// In Summary:
// - The `splice` method allows you to modify an array by removing, replacing, or inserting elements.
// - The first argument specifies the starting index.
// - The second argument specifies the number of elements to remove.
// - Additional arguments can be provided to insert new elements.
// - `splice` can also be used with negative indices for counting elements from the end of the array.
