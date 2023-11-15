// Promises are a way to handle asynchronous operations in a more structured and readable manner.

// Creating a basic Promise
const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation completed successfully");
    }, 1000);
  });
  
  // Usage
  simplePromise.then((result) => {
    console.log(result);
  });
  
  // Output:
  // Operation completed successfully
  
  // Handling errors with Promise
  const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error("Operation failed");
      reject(error);
    }, 1000);
  });
  
  // Usage
  errorPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  
  // Output:
  // Error: Operation failed
  

  // Chaining multiple Promises
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Data fetched successfully" });
      }, 1000);
    });
  };
  
  const processData = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ processedData: `${data.data} and processed` });
      }, 1000);
    });
  };
  
  // Usage
  fetchData()
    .then((data) => {
      console.log(data.data);
      return processData(data);
    })
    .then((processedData) => {
      console.log(processedData.processedData);
    });
  
  // Output:
  // Data fetched successfully
  // Data fetched successfully and processed
  
  // In Summary:
  // - Promises provide a more structured way to handle asynchronous operations.
  // - They can represent either success (resolved) or failure (rejected) states.
  // - You can chain multiple Promises to handle complex asynchronous workflows.
  // - Promises have a `.then()` method to handle resolved states and a `.catch()` method to handle rejected states.
  // - Modern JavaScript also provides async/await syntax for working with Promises, which can make asynchronous code even more readable.
  