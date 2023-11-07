// The for loop is used to repeatedly execute a block of code based on a condition.
// It consists of three parts: initialization, condition, and increment/decrement.

// Simple for loop to count from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i); // Output: 1, 2, 3, 4, 5
  }
  
  // In this example:
  // - Initialization: `let i = 1;` sets the initial value of the loop variable `i` to 1.
  // - Condition: `i <= 5;` specifies the condition that must be true to continue looping.
  // - Increment: `i++` increments the loop variable `i` by 1 in each iteration.
  
  // You can use a for loop to iterate over an array.
  let colors = ["red", "green", "blue", "yellow"];
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); // Output: "red", "green", "blue", "yellow"
  }
  
  // In this example, the loop iterates over the elements of the 'colors' array.
  
  // You can also loop backward using a for loop.
  for (let i = 5; i >= 1; i--) {
    console.log(i); // Output: 5, 4, 3, 2, 1
  }
  
  // Nested for loops can be used for more complex patterns.
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
  // Output:
  // i: 1, j: 1
  // i: 1, j: 2
  // i: 1, j: 3
  // i: 2, j: 1
  // i: 2, j: 2
  // i: 2, j: 3
  // i: 3, j: 1
  // i: 3, j: 2
  // i: 3, j: 3
  
  // In this example, a nested for loop is used to create a grid.
  
  // The for loop is a fundamental looping construct in JavaScript, providing control over iterations.
  