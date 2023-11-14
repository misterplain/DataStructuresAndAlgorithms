// Use Case 1: Using the throw Statement
function divide(a, b) {
  if (b === 0) {
    // Use the throw statement to raise an exception (error)
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  const result = divide(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
}
// Output: Result: 5

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("An error occurred:", error.message);
}
// Output: An error occurred: Division by zero is not allowed.

// Use Case 2: The finally Block
function fetchData() {
  try {
    // Simulate fetching data from a server
    const data = fetchDataFromServer();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    // The code in the finally block always runs, whether an error occurred or not
    console.log("Finally block executed");
  }
}

fetchData();
// Output (assuming successful data fetching):
// Data fetched successfully: { ... }
// Finally block executed

// Use Case 3: Handling Different Error Types
try {
  // Code that may throw different types of errors
  const value = getValueFromDatabase();
  console.log("Value:", value);
} catch (error) {
  if (error instanceof DatabaseError) {
    console.error("Database error:", error.message);
  } else if (error instanceof OtherError) {
    console.error("Other error:", error.message);
  } else {
    console.error("Unknown error:", error.message);
  }
} finally {
  console.log("Finally block executed");
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

class OtherError extends Error {
  constructor(message) {
    super(message);
    this.name = "OtherError";
  }
}
// Output (depending on the error type):
// Value: 42
// Database error: Connection failed
// Finally block executed

// In Summary:
// - The `throw` statement is used to manually throw exceptions (custom errors) in JavaScript.
// - When an exception is thrown, the program flow is disrupted, and the control is transferred to the nearest catch block.
// - The `finally` block is optional and is used for cleanup code that should run regardless of whether an error occurred or not.
// - `finally` is often used to release resources, close connections, or perform other cleanup operations.
