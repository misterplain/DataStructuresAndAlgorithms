// Use Case 1: Collecting Remaining Arguments as an Array
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
  
  // Use Case 2: Combining Regular Parameters with Rest Parameter
  function greet(greeting, ...names) {
    console.log(`${greeting}, ${names.join(", ")}`);
  }
  greet("Hello", "Alice", "Bob", "Charlie"); // Output: Hello, Alice, Bob, Charlie
  
  // Use Case 3: Rest Parameter with Destructuring
  function logInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
  }
  logInfo("Alice", 30, "Reading", "Painting", "Cooking");
  // Output:
  // Name: Alice, Age: 30
  // Hobbies: Reading, Painting, Cooking
  
  // Use Case 4: Rest Parameter and Arrow Functions
  const multiply = (...factors) => factors.reduce((acc, val) => acc * val, 1);
  console.log(multiply(2, 3, 4)); // Output: 24
  
  // Use Case 5: Rest Parameter and Function Calls
  function printValues(...values) {
    values.forEach((value) => console.log(value));
  }
  printValues(1, "apple", true);
  // Output:
  // 1
  // apple
  // true
  
  // In Summary:
  // - The rest parameter, represented by `...`, allows a function to collect multiple arguments into an array.
  // - It is useful when you want to work with a variable number of arguments in a function.
  // - The rest parameter must be the last parameter in a function's parameter list.
  // - It provides flexibility for working with a varying number of arguments, making your code more versatile.
  