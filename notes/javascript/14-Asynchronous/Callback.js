// Callbacks are functions passed as arguments to other functions and are commonly used in asynchronous programming.

// Callback as a function argument
function fetchData(callback) {
    setTimeout(function () {
      console.log("Data fetched");
      callback(); // Call the callback function
    }, 1000);
  }
  
  function processData() {
    console.log("Data processed");
  }
  
  // Usage
  fetchData(processData);
  
  // Output:
  // Data fetched
  // Data processed
  
  // Callback with data
  function fetchData(callback) {
    setTimeout(function () {
      console.log("Data fetched");
      const data = { message: "Hello, World!" };
      callback(data); // Call the callback function with data
    }, 1000);
  }
  
  function processData(data) {
    console.log("Data processed:", data.message);
  }
  
  // Usage
  fetchData(processData);
  
  // Output:
  // Data fetched
  // Data processed: Hello, World!
  
  // Nested callbacks (Callback Hell or Pyramid of Doom)
  function fetchData(callback) {
    setTimeout(function () {
      console.log("Data fetched");
      const data = { message: "Hello, World!" };
      callback(data); // Call the callback function with data
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(function () {
      console.log("Data processed:", data.message);
      callback(); // Call another callback function
    }, 1000);
  }
  
  function logSuccess() {
    console.log("Operation completed successfully");
  }
  
  // Usage
  fetchData(function (data) {
    processData(data, function () {
      logSuccess();
    });
  });
  
  // Output:
  // Data fetched
  // Data processed: Hello, World!
  // Operation completed successfully
  