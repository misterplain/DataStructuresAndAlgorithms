// Conditional Statements in JavaScript: if, else if, and else

// 1. Basic if Statement
// The basic if statement is used to execute a block of code if a condition is true.

let isTrue = true;

if (isTrue) {
  console.log("This block of code will run because 'isTrue' is true.");
}

// 2. if-else Statement
// The if-else statement allows you to execute one block of code if a condition is true and another block if it's false.

let isFalse = false;

if (isFalse) {
  console.log("This block of code won't run because 'isFalse' is false.");
} else {
  console.log("This block of code will run because 'isFalse' is false.");
}

// 3. if-else if-else Statement
// The if-else if-else statement allows you to test multiple conditions and execute different blocks of code accordingly.

let num = 10;

if (num < 5) {
  console.log("The number is less than 5.");
} else if (num < 10) {
  console.log("The number is less than 10 but not less than 5.");
} else {
  console.log("The number is 10 or greater.");
}

// 4. Nested if Statements
// You can nest if statements inside each other to handle more complex conditions.

let isMorning = true;
let isWeekend = true;

if (isMorning) {
  if (isWeekend) {
    console.log("Good morning, it's the weekend!");
  } else {
    console.log("Good morning, it's a weekday.");
  }
} else {
  console.log("It's not morning.");
}

// 5. Ternary Operator
// The ternary operator is a shorthand for if-else statements.

let isEven = num % 2 === 0 ? "Even" : "Odd";
console.log(`The number is ${isEven}.`);
