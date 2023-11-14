// Use Case 1: Creating a Simple Generator Function
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Use Case 2: Using a Generator Function with a for...of Loop
  const generator = simpleGenerator();
  for (const value of generator) {
    console.log(value);
  }
  // Output:
  // 1
  // 2
  // 3
  
  // Use Case 3: Pausing and Resuming Execution
  function* pauseAndResume() {
    console.log("Start");
    yield 1;
    console.log("Paused for a moment");
    yield 2;
    console.log("End");
  }
  
  const prGenerator = pauseAndResume();
  console.log(prGenerator.next().value); // Output: Start, 1
  console.log("Doing something else...");
  console.log(prGenerator.next().value); // Output: Paused for a moment, 2
  console.log(prGenerator.next().value); // Output: End
  
  // Use Case 4: Infinite Generator
  function* infiniteCounter() {
    let count = 1;
    while (true) {
      yield count++;
    }
  }
  
  const counter = infiniteCounter();
  console.log(counter.next().value); // Output: 1
  console.log(counter.next().value); // Output: 2
  console.log(counter.next().value); // Output: 3
  
  // In Summary:
  // - Generators are functions defined using the `function*` syntax.
  // - They allow you to pause and resume their execution using `yield` statements.
  // - Generators produce an iterator, which can be used in loops like `for...of`.
  // - You can use generators to create infinite sequences or control asynchronous flow.
  