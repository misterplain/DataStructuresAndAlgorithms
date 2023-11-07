// The while loop is used to repeatedly execute a block of code as long as a specified condition is true.
// It consists of only a condition, and the loop continues until the condition becomes false.

// Simple while loop to count from 1 to 5.
let i = 1;
while (i <= 5) {
  console.log(i); // Output: 1, 2, 3, 4, 5
  i++;
}

// In this example:
// - We initialize a variable `i` to 1 outside the loop.
// - The condition `i <= 5` is checked before each iteration.
// - The loop continues as long as the condition is true.
// - We increment `i` by 1 in each iteration to avoid an infinite loop.

// You can use a while loop to iterate over an array or perform tasks based on a condition.
let numbers = [10, 20, 30, 40, 50];
let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]); // Output: 10, 20, 30, 40, 50
  index++;
}

// In this example, the loop iterates over the elements of the 'numbers' array.

// You can use a while loop to implement complex algorithms.
let sum = 0;
let n = 1;
while (n <= 10) {
  sum += n;
  n++;
}
console.log(sum); // Output: 55 (sum of numbers from 1 to 10)

// Be cautious with while loops to avoid infinite loops. Make sure the condition eventually becomes false.

// The do-while loop is similar to a while loop, but it guarantees that the code block executes at least once.
let condition = false;
do {
  console.log("This will be executed at least once.");
} while (condition);

// The code block is executed first, and then the condition is checked.

// The while loop is a versatile construct for performing repetitive tasks in JavaScript.
