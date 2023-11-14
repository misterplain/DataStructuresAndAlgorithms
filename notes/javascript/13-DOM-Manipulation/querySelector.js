// Simplest Usage: Selecting Elements by Tag Name
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// Selecting Elements by Class Name
const allHighlightedElements = document.querySelectorAll('.highlighted');
console.log(allHighlightedElements);

// Selecting Elements by ID
const headerElement = document.querySelector('#header');
console.log(headerElement);

// Combining Selectors: Selecting Nested Elements
const listItem = document.querySelector('ul li');
console.log(listItem);

// Using Complex Selectors: Selecting Elements with Attributes
const inputWithPlaceholder = document.querySelector('input[type="text"][placeholder="Search"]');
console.log(inputWithPlaceholder);

// Navigating the DOM: Selecting Children of a Parent Element
const parentElement = document.querySelector('.parent');
const childElement = parentElement.querySelector('.child');
console.log(childElement);

// Error Handling: Returns `null` if No Match Is Found
const nonExistentElement = document.querySelector('.non-existent');
if (nonExistentElement === null) {
  console.error('Element not found.');
}

// In Summary: `querySelector` allows you to select and retrieve DOM elements using various CSS selectors.
// - It returns the first matching element or `null` if no match is found.
// - You can use tag names, class names, IDs, complex selectors, and navigate the DOM hierarchy.
// - Always check for `null` when using `querySelector` to handle non-existent elements.
