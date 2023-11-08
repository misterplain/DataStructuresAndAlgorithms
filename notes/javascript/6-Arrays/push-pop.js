// Least Complex: Using push to Add Elements to the End of an Array
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('date');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Using pop to Remove and Return the Last Element of an Array
const colors = ['red', 'green', 'blue'];
const removedColor = colors.pop();
console.log(removedColor); // Output: 'blue'
console.log(colors); // Output: ['red', 'green']

// Adding Multiple Elements Using push
const numbers = [1, 2];
numbers.push(3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Using pop to Safely Remove the Last Element
const emptyArray = [];
const lastItem = emptyArray.pop(); // No error; lastItem is undefined
console.log(lastItem); // Output: undefined

// Most Complex: Combining push and pop to Implement a Stack
const stack = [];
stack.push('item1');
stack.push('item2');
const topItem = stack.pop(); // Removes 'item2' from the stack
console.log(topItem); // Output: 'item2'
console.log(stack); // Output: ['item1']

// In Summary:
// - The `push` method is used to add one or more elements to the end of an array.
// - The `pop` method is used to remove and return the last element from an array.
// - These methods are commonly used to work with arrays as stacks (Last-In-First-Out, or LIFO data structure).
