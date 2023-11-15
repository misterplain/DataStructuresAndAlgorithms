// Promise chaining is a technique used to work with asynchronous operations using Promises in a sequential and readable manner.

// **Example 1: Basic Promise Chaining**
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 1000);
  });
  
  promise1
    .then((result) => {
      console.log(result); // Output: "Hello"
      return "World";
    })
    .then((result) => {
      console.log(result); // Output: "World"
    });
  
  // Explanation: Promises can be chained using `.then()`. Each `.then()` returns a new Promise.
  
  // **Example 2: Chaining with Fetch API**
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.title); // Output: "sunt aut facere repellat provident..."
      return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
    })
    .then((response) => response.json())
    .then((userData) => {
      console.log(userData.name); // Output: "Leanne Graham"
    });
  
  // Explanation: Promises can chain network requests to fetch and process data sequentially.
  
  // **Example 3: Error Handling**
  const asyncFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Error!"), 1000);
    });
  };
  
  asyncFunction()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error); // Output: "Error!"
    });
  
  // Explanation: Use `.catch()` to handle errors in the chain.
  
  // In Summary:
  // - Promise chaining allows you to perform asynchronous operations sequentially.
  // - Each `.then()` returns a new Promise, enabling you to chain more operations.
  // - `.catch()` can be used to handle errors in the chain.
  