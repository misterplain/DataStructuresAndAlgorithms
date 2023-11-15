// JavaScript uses an event loop and a concurrency model to handle asynchronous operations.

// **Example 1: The Event Loop**
// JavaScript executes code in a single-threaded manner, but it can handle async tasks using the event loop.
// The event loop continuously checks the message queue for tasks and executes them.

// Simulating asynchronous behavior with setTimeout
setTimeout(() => {
    console.log("Async task 1");
  }, 1000);
  
  console.log("Sync task 1");
  console.log("Sync task 2");
  
  // Output:
  // Sync task 1
  // Sync task 2
  // Async task 1
  
  // Explanation: setTimeout schedules an asynchronous task that executes after 1000ms while synchronous tasks continue.
  
  // **Example 2: Promises and Async/Await**
  // Promises provide a way to handle asynchronous operations in a more structured manner.
  
  // Using Promises
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });
  };
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  
  console.log("Fetching data...");
  
  // Output:
  // Fetching data...
  // Data received
  
  // Explanation: Promises allow you to handle async tasks in a more readable way.
  
  // **Example 3: Concurrency Model**
  // JavaScript is single-threaded, but it can still handle concurrency using non-blocking operations.
  
  // Simulating I/O-bound operations with setInterval
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log(`Counter: ${count}`);
  
    if (count >= 5) {
      clearInterval(intervalId);
    }
  }, 1000);
  
  console.log("Started counting...");
  
  // Output:
  // Started counting...
  // Counter: 1
  // Counter: 2
  // Counter: 3
  // Counter: 4
  // Counter: 5
  
  // Explanation: JavaScript can handle multiple I/O-bound tasks concurrently without blocking.
  
  // **Example 4: Worker Threads (Advanced)**
  // For CPU-intensive tasks, you can use Web Worker threads to run code in parallel.
  
  // main.js
  const worker = new Worker("worker.js");
  
  worker.onmessage = (event) => {
    console.log(`Worker result: ${event.data}`);
  };
  
  worker.postMessage({ input: 5 });
  
  // worker.js
  onmessage = (event) => {
    const input = event.data.input;
    const result = input * 2;
    postMessage(result);
  };
  
  // Explanation: Web Workers allow running code in separate threads for CPU-intensive tasks.
  
  // In Summary:
  // - JavaScript uses the event loop to handle asynchronous operations.
  // - Promises provide a structured way to work with async tasks.
  // - JavaScript's concurrency model allows non-blocking I/O operations.
  // - Web Workers enable parallelism for CPU-intensive tasks.
  