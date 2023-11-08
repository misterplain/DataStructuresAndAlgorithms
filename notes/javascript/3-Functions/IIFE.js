// IIFE (Immediately Invoked Function Expression) in JavaScript

// Basic IIFE:
(function() {
    console.log("I am an IIFE!");
  })();
  // Output: "I am an IIFE!"
  
  // In this example, the function is defined and immediately invoked using parentheses.
  
  // IIFE with Parameters:
  (function(name) {
    console.log(`Hello, ${name}!`);
  })("Alice");
  // Output: "Hello, Alice!"
  
  // IIFE can accept parameters and be invoked with values.
  
  // IIFE with Return Value:
  const result = (function(a, b) {
    return a + b;
  })(3, 4);
  
  console.log(`Result: ${result}`); // Output: "Result: 7"
  
  // IIFE can return a value that can be assigned to a variable.
  
  // Advanced IIFE (Module Pattern):
  const counterModule = (function() {
    let count = 0;
  
    function increment() {
      count++;
    }
  
    function decrement() {
      count--;
    }
  
    function getCount() {
      return count;
    }
  
    return {
      increment,
      decrement,
      getCount,
    };
  })();
  
  counterModule.increment();
  counterModule.increment();
  console.log(`Count: ${counterModule.getCount()}`); // Output: "Count: 2"
  
  // IIFE can be used to create modules, encapsulating data and functions.
  
  // In Summary:
  // - IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after declaration.
  // - It's often used for encapsulating code to avoid polluting the global scope.
  // - IIFE can accept parameters, return values, and be used to create modules.
  