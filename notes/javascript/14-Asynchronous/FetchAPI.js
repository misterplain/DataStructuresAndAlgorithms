// The Fetch API is a modern JavaScript feature for making HTTP requests in an asynchronous and promise-based manner.

// **Example 1: Basic Fetch Request**
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

// Output: Fetches data from a REST API and logs it to the console.

// **Example 2: Fetch with POST Request**
const postData = {
  userId: 1,
  id: 101,
  title: 'foo',
  body: 'bar',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

// Output: Sends a POST request with JSON data and logs the response.

// **Example 3: Fetch with Error Handling**
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

// Usage
fetchData('https://jsonplaceholder.typicode.com/posts/999')
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error.message));

// Output: Handles errors when fetching data.

// In Summary:
// - The Fetch API provides a clean and promise-based way to make HTTP requests.
// - You can use fetch() to perform GET, POST, PUT, DELETE, and other HTTP methods.
// - Response data is typically processed using .then() and .catch() for error handling.
// - Fetch is widely supported in modern browsers and is the recommended way to make HTTP requests in JavaScript.
