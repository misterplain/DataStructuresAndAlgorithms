// Using shift to Remove and Return the First Element of an Array
const fruits = ['apple', 'banana', 'cherry'];
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'cherry']

// Using unshift to Add Elements to the Beginning of an Array
const colors = ['green', 'blue'];
colors.unshift('red');
console.log(colors); // Output: ['red', 'green', 'blue']

// Adding Multiple Elements Using unshift
const numbers = [4, 5];
numbers.unshift(1, 2, 3);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Removing and Returning the First Element Using shift
const emptyArray = [];
const firstItem = emptyArray.shift(); // No error; firstItem is undefined
console.log(firstItem); // Output: undefined

// Combining shift and unshift to Implement a Queue
const queue = [];
queue.push('item1');
queue.push('item2');
const nextItem = queue.shift(); // Removes 'item1' from the queue
console.log(nextItem); // Output: 'item1'
console.log(queue); // Output: ['item2']

// In Summary:
// - The `shift` method removes and returns the first element of an array.
// - The `unshift` method adds one or more elements to the beginning of an array.
// - These methods are commonly used to work with arrays as queues (First-In-First-Out, or FIFO data structure).
