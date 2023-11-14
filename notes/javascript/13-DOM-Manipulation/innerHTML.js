// Simplest Usage: Getting and Setting HTML Content
const simpleDiv = document.querySelector('.simple-div');
console.log(simpleDiv.innerHTML); // Get the HTML content

simpleDiv.innerHTML = '<p>New HTML Content</p>'; // Set the HTML content
console.log(simpleDiv.innerHTML);

// Creating and Appending Elements with `innerHTML`
const complexDiv = document.querySelector('.complex-div');

// Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Appended Paragraph';

// Append the paragraph to the complexDiv using `innerHTML`
complexDiv.innerHTML += newParagraph.outerHTML;

// Removing Elements with `innerHTML`
const removeElement = document.querySelector('.remove-me');

// Use `innerHTML` to clear the content of an element (remove all child nodes)
removeElement.innerHTML = '';

// In Summary: `innerHTML` is used to get or set the HTML content of an element.
// - When getting, it returns the HTML content as a string.
// - When setting, it replaces the existing content with the provided HTML string.
// - Be cautious when setting HTML with user-generated content to prevent XSS vulnerabilities.
