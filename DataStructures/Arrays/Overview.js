/**
 * Overview: Arrays in JavaScript
 *
 * An array is a fundamental data structure in JavaScript used to store a collection of values.
 * Arrays in JavaScript are indexed starting from 0, and they can hold various data types, including numbers, strings, objects, and functions.
 * Arrays are versatile and can be modified by adding, removing, and updating elements.
 * Here's how you declare and work with arrays:
 */

// Declaring an array:
const fruits = ["apple", "banana", "cherry", "date"];

// Accessing elements by index:
const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"

// Modifying an array:
fruits.push("fig"); // Add an element to the end: ["apple", "banana", "cherry", "date", "fig"]
fruits.pop(); // Remove the last element: ["apple", "banana", "cherry", "date"]
fruits[2] = "blueberry"; // Update an element by index: ["apple", "banana", "blueberry", "date"]

// Iterating through an array:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Array methods:
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Example of a multi-dimensional array:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
