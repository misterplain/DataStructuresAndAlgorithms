// Sorting Numeric Array in Ascending Order
const numbers = [5, 2, 9, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 5, 5, 9]

// Sorting Numeric Array in Descending Order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 5, 5, 2, 1]

// Sorting String Array in Ascending Order
const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Sorting String Array in Descending Order
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

// Sorting Objects Based on a Property
const students = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 28 },
];
students.sort((a, b) => a.age - b.age);
console.log(students);
// Output:
// [
//   { name: 'Bob', age: 22 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 28 }
// ]

// In Summary:
// - The `sort` method is used to sort the elements of an array in place and returns the sorted array.
// - By default, it sorts elements as strings, which may not produce the correct order for numeric or custom sorting.
// - To sort numerically, provide a comparison function `(a, b) => a - b` for ascending order or `(a, b) => b - a` for descending order.
// - To sort strings alphabetically, use `sort()` or provide `(a, b) => a.localeCompare(b)` for descending order.
// - For custom sorting of objects, provide a comparison function that compares the desired property.
