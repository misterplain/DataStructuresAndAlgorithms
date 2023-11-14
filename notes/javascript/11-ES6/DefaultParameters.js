// Use Case 1: Simple Default Parameter
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greet(); // Output: Hello, Guest!
  greet("Alice"); // Output: Hello, Alice!
  
  // Use Case 2: Default Parameters with Expressions
  function calculateTotal(price, taxRate = 0.1) {
    const total = price * (1 + taxRate);
    return total;
  }
  console.log(calculateTotal(100)); // Output: 110
  console.log(calculateTotal(100, 0.15)); // Output: 115
  
  // Use Case 3: Default Parameters and Destructuring
  function getUserInfo(user = { name: "Anonymous", age: 0 }) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  }
  getUserInfo(); // Output: Name: Anonymous, Age: 0
  getUserInfo({ name: "Bob", age: 30 }); // Output: Name: Bob, Age: 30
  
  // Use Case 4: Default Parameters and Function Calls
  function multiply(a, b = 2 * a) {
    return a * b;
  }
  console.log(multiply(5)); // Output: 25 (b = 2 * 5)
  
  // Use Case 5: Default Parameters and Undefined
  function logMessage(message = "No message provided") {
    console.log(message);
  }
  logMessage(); // Output: No message provided
  logMessage(undefined); // Output: No message provided
  
  // In Summary:
  // - Default function parameters allow you to specify default values for function arguments.
  // - When an argument is not provided or is explicitly set to 'undefined', the default value is used.
  // - Default parameters are evaluated at the time of the function call, not when the function is defined.
  // - They are helpful for providing fallback values or simplifying function calls.
  