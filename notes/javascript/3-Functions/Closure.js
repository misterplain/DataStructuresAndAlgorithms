//In summary, function closures in JavaScript occur when an inner function has access to the variables of its outer (enclosing) function even after the outer function has finished executing. Closures are useful for data encapsulation, creating private variables, and maintaining state. Closures can sometimes lead to unexpected behavior, especially in loops, where the loop variable should be captured with let for each iteration to work as expected. Closures are a fundamental concept in JavaScript and are widely used in various programming scenarios.

// Function Closures in JavaScript

// Basic Closure Example:
function outer() {
    const outerVar = "I am from outer function";
    
    function inner() {
      console.log(outerVar); // Accesses 'outerVar' from the outer function
    }
    
    return inner;
  }
  
  const closureFn = outer();
  closureFn(); // Output: "I am from outer function"
  
  // In this example, the inner function 'inner' "closes over" its surrounding scope, capturing 'outerVar'.
  
  // Closure with Parameters:
  function greet(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetAlice = greet("Alice");
  greetAlice(); // Output: "Hello, Alice!"
  
  // Closures can capture not only variables but also function parameters.
  
  // Closure with Counter:
  function counter() {
    let count = 0;
    
    return function() {
      count++;
      console.log(`Count: ${count}`);
    };
  }
  
  const increment = counter();
  increment(); // Output: "Count: 1"
  increment(); // Output: "Count: 2"
  
  // In this example, the closure maintains a private counter.
  
  // Closure in a Loop:
  function createFunctions() {
    const functions = [];
    
    for (let i = 0; i < 3; i++) {
      functions.push(function() {
        console.log(i); // Captures the 'i' variable at each iteration
      });
    }
    
    return functions;
  }
  
  const funcArray = createFunctions();
  
  funcArray[0](); // Output: 3 (not 0 as expected)
  funcArray[1](); // Output: 3
  funcArray[2](); // Output: 3
  
  // Closures can exhibit unexpected behavior in loops. They capture the variable 'i' by reference.
  
  // Using 'let' in a Closure (Correct Behavior):
  function createFunctionsFixed() {
    const functions = [];
    
    for (let i = 0; i < 3; i++) {
      functions.push(function() {
        console.log(i); // Each closure captures its own 'i' value
      });
    }
    
    return functions;
  }
  
  const funcArrayFixed = createFunctionsFixed();
  
  funcArrayFixed[0](); // Output: 0
  funcArrayFixed[1](); // Output: 1
  funcArrayFixed[2](); // Output: 2
  
  // To fix the previous issue, you can use 'let' instead of 'var' in the loop declaration.
  
  // Closure with Immediate Invocation (IIFE):
  const secretCounter = (function() {
    let count = 0;
    
    return {
      increment: function() {
        count++;
        console.log(`Count: ${count}`);
      },
      decrement: function() {
        count--;
        console.log(`Count: ${count}`);
      },
    };
  })();
  
  secretCounter.increment(); // Output: "Count: 1"
  secretCounter.decrement(); // Output: "Count: 0"
  
  // Immediately Invoked Function Expressions (IIFE) are often used to create private variables and functions.
  
  // Closures are a powerful and common concept in JavaScript, used for data encapsulation, creating private variables, and maintaining state.
  