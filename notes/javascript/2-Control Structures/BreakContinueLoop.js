// Breaking and Continuing within Loops

// The 'break' statement is used to exit a loop prematurely.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // Exit the loop when i equals 3.
    }
    console.log(i);
  }
  // Output: 1, 2
  
  // In this example, the loop stops when i becomes 3 due to the 'break' statement.
  
  // The 'continue' statement is used to skip the current iteration and move to the next one.
  for (let j = 1; j <= 5; j++) {
    if (j === 3) {
      continue; // Skip the iteration when j equals 3.
    }
    console.log(j);
  }
  // Output: 1, 2, 4, 5
  
  // In this example, the iteration when j equals 3 is skipped due to the 'continue' statement.
  
  // You can use 'break' and 'continue' in more complex loops, like nested loops.
  for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
      if (x * y === 4) {
        break; // Exit the inner loop when x * y equals 4.
      }
      console.log(`x: ${x}, y: ${y}`);
    }
  }
  // Output:
  // "x: 1, y: 1"
  // "x: 1, y: 2"
  // "x: 2, y: 1"
  // "x: 2, y: 2"
  
  // In this example, the 'break' statement exits the inner loop when x * y equals 4.
  
  // You can also use 'continue' in nested loops to skip specific iterations.
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      if (a === 2 && b === 2) {
        continue; // Skip the iteration when a equals 2 and b equals 2.
      }
      console.log(`a: ${a}, b: ${b}`);
    }
  }
  // Output:
  // "a: 1, b: 1"
  // "a: 1, b: 2"
  // "a: 1, b: 3"
  // "a: 2, b: 1"
  // "a: 2, b: 3"
  // "a: 3, b: 1"
  // "a: 3, b: 2"
  // "a: 3, b: 3"
  
  // In this example, the 'continue' statement skips the iteration when a equals 2 and b equals 2.
  
  // 'break' and 'continue' are powerful tools for controlling the flow of loops in JavaScript.
  