// The do-while loop is similar to a while loop but guarantees that the code block executes at least once.
// It consists of three parts: initialization, condition, and the code block.

// Simple do-while loop to count from 1 to 5.
let i = 1;
do {
  console.log(i); // Output: 1, 2, 3, 4, 5
  i++;
} while (i <= 5);

// In this example:
// - We initialize a variable `i` to 1.
// - The code block is executed first.
// - Then, the condition `i <= 5` is checked.
// - The loop continues as long as the condition is true.

// You can use a do-while loop to get user input and ensure at least one execution.
let userInput;
do {
  userInput = prompt("Enter a positive number:");
} while (isNaN(userInput) || parseFloat(userInput) <= 0);

console.log(`You entered a valid positive number: ${userInput}`);

// In this example, the loop keeps asking the user for input until a valid positive number is entered.

// You can also use a do-while loop for menu-driven programs.
let choice;
do {
  console.log("Menu:");
  console.log("1. Option 1");
  console.log("2. Option 2");
  choice = prompt("Select an option:");
} while (choice !== "1" && choice !== "2");

console.log(`You selected Option ${choice}`);

// The do-while loop ensures that the menu is displayed at least once.

// Be cautious with do-while loops to avoid infinite loops.
// The condition should eventually become false.

// The do-while loop is useful when you want to execute a block of code at least once before checking the condition.
