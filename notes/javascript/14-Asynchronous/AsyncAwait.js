// Async/await is a syntactical feature in JavaScript for working with Promises in a more readable and synchronous-like way.

// **Example 1: Simple Async Function**
async function simpleAsyncFunction() {
    return "Hello, world!";
  }
  
  // Usage
  (async () => {
    const result = await simpleAsyncFunction();
    console.log(result);
  })();
  
  // Output:
  // Hello, world!
  
  // **Example 2: Async Function with Error Handling**
  async function asyncFunctionWithError() {
    throw new Error("An error occurred");
  }
  
  // Usage
  (async () => {
    try {
      const result = await asyncFunctionWithError();
      console.log(result); // This won't execute due to the error.
    } catch (error) {
      console.error("Error:", error.message);
    }
  })();
  
  // Output:
  // Error: An error occurred
  
  // **Example 3: Async Function with Multiple Awaits**
  async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 1000);
    });
  }
  
  async function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${data} and processed`);
      }, 1000);
    });
  }
  
  // Usage
  (async () => {
    const data = await fetchData();
    console.log(data);
  
    const processedData = await processData(data);
    console.log(processedData);
  })();
  
  // Output:
  // Data fetched successfully
  // Data fetched successfully and processed
  
  // In Summary:
  // - Async/await simplifies working with asynchronous code, making it appear more like synchronous code.
  // - An async function returns a Promise implicitly.
  // - You can use the `await` keyword inside an async function to pause execution until a Promise is resolved.
  // - Error handling can be done with try/catch blocks.
  // - Async/await is particularly useful for improving the readability of complex asynchronous workflows.
  