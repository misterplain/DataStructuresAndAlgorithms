// Simplest Usage
const arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); // Output: [0, 0, 0, 0, 0]

// Fill with a specific value
const numbers = new Array(5).fill(42);
console.log(numbers); // Output: [42, 42, 42, 42, 42]

// Fill a portion of the array
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.fill('orange', 1, 3);
console.log(fruits); // Output: ['apple', 'orange', 'orange', 'date']

// Modifying an empty array
const emptyArray = new Array(3).fill('hello');
console.log(emptyArray); // Output: ['hello', 'hello', 'hello']

// Using a variable to fill the array
const length = 5;
const initialValue = 'abc';
const filledArray = new Array(length).fill(initialValue);
console.log(filledArray); // Output: ['abc', 'abc', 'abc', 'abc', 'abc']
