// Error Propagation with Try...Catch (Basic Error Handling)

try {
    // Code that may throw an error
    const result = someFunction();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
  
  // Error Propagation with Try...Catch for Specific Errors
  
  try {
    // Code that may throw a specific error
    const result = JSON.parse('invalid JSON');
    console.log(result);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('SyntaxError:', error.message);
    } else {
      console.error('An error occurred:', error.message);
    }
  }
  
  // Error Propagation with Async/Await (Promise Rejection)
  
  async function fetchData() {
    // Simulating an asynchronous operation that may fail
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000);
    });
  }
  
  async function main() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  }
  
  main();
  
  // Error Propagation with Promise.catch (Promise Rejection Handling)
  
  function fetchDataWithPromise() {
    // Simulating an asynchronous operation that may fail
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000);
    });
  }
  
  fetchDataWithPromise()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('An error occurred:', error.message);
    });
  
  // In Summary: Error propagation is the process of handling and passing errors in your code.
  // - Use try...catch to handle errors synchronously.
  // - Use instanceof to check specific error types.
  // - In asynchronous code, use async/await or Promise.catch to handle errors gracefully.
  