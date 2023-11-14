// Custom Error Class (Least Complex)

class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  // Usage of Custom Error Class
  
  try {
    throw new CustomError('This is a custom error message.');
  } catch (error) {
    console.error(error.name);    // "CustomError"
    console.error(error.message); // "This is a custom error message."
  }
  
  // Custom Error Class with Additional Properties
  
  class DetailedError extends Error {
    constructor(message, code) {
      super(message);
      this.name = 'DetailedError';
      this.code = code;
    }
  }
  
  // Usage of Custom Error Class with Additional Properties
  
  try {
    throw new DetailedError('An error occurred.', 404);
  } catch (error) {
    console.error(error.name);    // "DetailedError"
    console.error(error.message); // "An error occurred."
    console.error(error.code);    // 404
  }
  
  // Custom Error Class with Stack Trace (Most Complex)
  
  class StackTraceError extends Error {
    constructor(message) {
      super(message);
      this.name = 'StackTraceError';
      Error.captureStackTrace(this, StackTraceError);
    }
  }
  
  // Usage of Custom Error Class with Stack Trace
  
  try {
    throw new StackTraceError('Error with stack trace.');
  } catch (error) {
    console.error(error.name);    // "StackTraceError"
    console.error(error.message); // "Error with stack trace."
    console.error(error.stack);   // Stack trace with function call locations
  }
  