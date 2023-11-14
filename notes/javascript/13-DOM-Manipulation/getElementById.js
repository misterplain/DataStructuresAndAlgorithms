// Simplest Usage: Retrieving an Element by Its ID
const elementById = document.getElementById('myElementId');
console.log(elementById);

// Using getElementById to Change Content
const headerElement = document.getElementById('header');
headerElement.innerHTML = 'Hello, World!';

// Adding a Click Event Listener
const buttonElement = document.getElementById('myButton');
buttonElement.addEventListener('click', () => {
  alert('Button clicked!');
});

// Manipulating Styles with getElementById
const paragraphElement = document.getElementById('paragraph');
paragraphElement.style.color = 'blue';
paragraphElement.style.fontSize = '18px';

// Error Handling: getElementById Returns null if Element Not Found
const nonExistentElement = document.getElementById('nonExistent');
if (nonExistentElement === null) {
  console.error('Element not found.');
}

// In Summary: `getElementById` is a method to retrieve an HTML element by its unique ID.
// - It returns the first element with the specified ID.
// - You can change content, add event listeners, and manipulate styles with it.
// - Be cautious and check for null when using `getElementById` to avoid errors when an element is not found.
