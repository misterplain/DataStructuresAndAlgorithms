// Web Workers allow you to run JavaScript code in separate threads, enabling multi-threading in the browser.

// **Example 1: Creating a Simple Worker**
// Creating and using a basic Web Worker.

// main.js
const worker = new Worker("worker.js");

worker.onmessage = (event) => {
  console.log(`Worker says: ${event.data}`);
};

worker.postMessage("Hello from main!");

// worker.js
onmessage = (event) => {
  const messageFromMain = event.data;
  console.log(`Main says: ${messageFromMain}`);

  // Sending a response back to the main thread
  postMessage("Hello from worker!");
};

// Output:
// Main says: Hello from main!
// Worker says: Hello from worker!

// Explanation: A simple Web Worker that exchanges messages with the main thread.

// **Example 2: Performing Intensive Calculations (Advanced)**
// Using a Web Worker for CPU-intensive tasks.

// main.js
const worker = new Worker("worker.js");

worker.onmessage = (event) => {
  console.log(`Result: ${event.data}`);
};

// Send a complex calculation task to the worker
worker.postMessage({ operation: "multiply", numbers: [2, 3, 4] });

// worker.js
onmessage = (event) => {
  const { operation, numbers } = event.data;
  let result = 0;

  if (operation === "multiply") {
    result = numbers.reduce((acc, num) => acc * num, 1);
  }

  postMessage(result);
};

// Output:
// Result: 24

// Explanation: The main thread offloads a complex calculation to a Web Worker for improved performance.

// **Example 3: Dedicated Workers and Shared Workers (Advanced)**
// Dedicated Workers run in a separate thread for each instance, while Shared Workers can be shared among multiple instances.

// main.js
const worker1 = new Worker("dedicated-worker.js");
const worker2 = new Worker("dedicated-worker.js");

worker1.onmessage = (event) => {
  console.log(`Worker 1 says: ${event.data}`);
};

worker2.onmessage = (event) => {
  console.log(`Worker 2 says: ${event.data}`);
};

worker1.postMessage("Hello from Worker 1!");
worker2.postMessage("Hello from Worker 2!");

// dedicated-worker.js
onmessage = (event) => {
  const messageFromMain = event.data;
  console.log(`Main says: ${messageFromMain}`);
};

// Output:
// Main says: Hello from Worker 1!
// Main says: Hello from Worker 2!
// Worker 1 says: Hello from Worker 1!
// Worker 2 says: Hello from Worker 2!

// Explanation: Dedicated Workers run separately for each instance, while Shared Workers can be shared among multiple instances.

// In Summary:
// - Web Workers enable multi-threading in the browser.
// - They allow running JavaScript code in separate threads.
// - Web Workers are useful for offloading CPU-intensive tasks and improving performance.
// - Dedicated Workers run in separate threads for each instance, while Shared Workers can be shared.
