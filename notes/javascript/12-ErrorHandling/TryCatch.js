// Use Case 1: Basic Error Handling
try {
  // Code that may throw an error
  const result = 10 / 0; // Attempting to divide by zero
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
}
// Output: An error occurred: Division by zero

// Use Case 2: Handling Different Types of Errors
try {
  const name = "John";
  name.toUpperCase(); // Attempting to call a method on a string variable
} catch (error) {
  if (error instanceof TypeError) {
    console.error("TypeError:", error.message);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
}
// Output: TypeError: name.toUpperCase is not a function

// Use Case 3: Nested Try-Catch Blocks
try {
  try {
    // Code that may throw an error
    const data = JSON.parse("invalid JSON");
    console.log(data);
  } catch (innerError) {
    throw new Error("An error occurred while parsing JSON");
  }
} catch (outerError) {
  console.error("Outer error:", outerError.message);
}
// Output: Outer error: An error occurred while parsing JSON

// Use Case 4: Finally Block
try {
  // Code that may throw an error
  const value = getValueFromServer();
  console.log("Value:", value);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  // Code in the finally block always runs, regardless of whether an error occurred or not
  console.log("Finally block executed");
}
// Output (assuming no error): Value: 42, Finally block executed

// In Summary:
// - Try-catch blocks are used for handling exceptions (errors) in JavaScript.
// - The code inside the try block is executed, and if an error occurs, it's caught and handled in the catch block.
// - Error objects contain information about the error, such as its type and message.
// - You can have multiple catch blocks to handle different types of errors.
// - Nested try-catch blocks allow for more granular error handling.
// - The finally block is optional and runs regardless of whether an error occurred or not. It's often used for cleanup.

// Using try...catch for synchronous error handling
try {
  // Synchronous code that may throw an error
  throw new Error("This is an error");
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
