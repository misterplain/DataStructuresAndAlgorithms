// AJAX allows you to make asynchronous requests to a server and update parts of a web page without reloading the entire page.

// **Example 1: Basic AJAX Request with XMLHttpRequest**
// Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure the request (GET request to a JSON API)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// Set up an event listener for when the request is complete
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.status);
  }
};

// Send the request
xhr.send();

// Output: Makes a GET request and logs the response data.

// **Example 2: AJAX with Fetch API**
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

// Output: Fetches data from a REST API and logs it to the console.

// **Example 3: AJAX with jQuery (Simpler Syntax)**
$.get('https://jsonplaceholder.typicode.com/posts/1', function (data) {
  console.log(data);
});

// Output: Uses jQuery to make a GET request and logs the response.

// **Example 4: AJAX with jQuery (Deferred Object)**
const request = $.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
});

request
  .done(function (data) {
    console.log(data);
  })
  .fail(function (xhr, status, error) {
    console.error('Error:', status);
  });

// Output: Makes an AJAX request with jQuery and handles success and failure.

// In Summary:
// - AJAX allows you to make asynchronous HTTP requests to a server.
// - You can use native XMLHttpRequest or modern Fetch API.
// - Libraries like jQuery simplify AJAX requests and provide more concise syntax.
// - AJAX is commonly used for fetching data from a server and updating web pages without full page reloads.
