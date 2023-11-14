// Simplest Case: Basic Promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1000);
  });
  
  promise1
    .then((result) => {
      console.log(result); // Output: Promise resolved
    })
    .catch((error) => {
      console.error(error); // Won't be triggered in this case
    });
  
  // Handling Rejections
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected"));
    }, 1000);
  });
  
  promise2
    .then((result) => {
      console.log(result); // Won't be executed
    })
    .catch((error) => {
      console.error(error.message); // Output: Promise rejected
    });
  
  // Chaining Promises
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise resolved");
    }, 1000);
  });
  
  promise3
    .then((result) => {
      console.log(result); // Output: First Promise resolved
      return "Second Promise result";
    })
    .then((result) => {
      console.log(result); // Output: Second Promise result
    })
    .catch((error) => {
      console.error(error); // Won't be triggered in this case
    });
  
  // Handling Errors in Chained Promises
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected"));
    }, 1000);
  });
  
  promise4
    .then((result) => {
      console.log(result); // Won't be executed
    })
    .catch((error) => {
      console.error(error.message); // Output: Promise rejected
      throw new Error("Throwing an error");
    })
    .catch((error) => {
      console.error(error.message); // Output: Throwing an error
    });
  
  // Summary:
  // - Promises are used to handle asynchronous operations.
  // - `.then` is used to handle resolved promises.
  // - `.catch` is used to handle rejected promises.
  // - Chaining `.then` allows sequencing of asynchronous operations.
  // - Errors in `.then` or `.catch` can be propagated to subsequent `.catch` blocks.
  
  // Using try...catch for synchronous error handling
try {
    // Synchronous code that may throw an error
    throw new Error('This is an error');
  } catch (error) {
    // Handle the error here
    console.error(error.message);
  }
  
  // Using .then/.catch for asynchronous error handling
  const promise = someAsyncFunction();
  
  promise
    .then((result) => {
      // Handle the successful result
    })
    .catch((error) => {
      // Handle errors that occurred during Promise execution
      console.error(error.message);
    });
  