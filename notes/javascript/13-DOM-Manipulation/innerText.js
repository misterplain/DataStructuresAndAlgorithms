// Simplest Usage: Getting and Setting Text Content
const simpleParagraph = document.querySelector('.simple-paragraph');
console.log(simpleParagraph.innerText); // Get the text content

simpleParagraph.innerText = 'New Text Content'; // Set the text content
console.log(simpleParagraph.innerText);

// Getting and Setting Text Content of Nested Elements
const complexDiv = document.querySelector('.complex-div');
console.log(complexDiv.innerText); // Get the text content of the parent element

const nestedParagraph = complexDiv.querySelector('p');
console.log(nestedParagraph.innerText); // Get the text content of the nested paragraph

// Handling HTML Tags as Text
const htmlContentElement = document.querySelector('.html-content');
console.log(htmlContentElement.innerText); // Get text content with HTML tags as text

// Using `innerText` for User Input Fields
const inputElement = document.querySelector('.user-input');
console.log(inputElement.innerText); // Get text content from input fields (usually used with `value`)

// In Summary: `innerText` is used to get or set the text content of an element, including nested elements.
// - When getting, it returns the visible text within the element, excluding hidden or non-rendered elements.
// - When setting, it replaces the existing text content with the provided string.
// - Be cautious when using `innerText` with user input fields; for input values, use `.value` instead.
