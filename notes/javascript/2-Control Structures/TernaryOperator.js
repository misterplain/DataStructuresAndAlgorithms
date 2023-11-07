// The ternary operator is a concise way to write conditional statements in JavaScript.
let isRaining = true;
let weather = isRaining ? "Take an umbrella" : "Enjoy the sunshine";
console.log(weather); // Output: "Take an umbrella"

// It consists of three parts: condition ? expressionIfTrue : expressionIfFalse
// If the condition is true, it evaluates expressionIfTrue; otherwise, it evaluates expressionIfFalse.

// You can use it to assign values conditionally based on a condition.
let age = 20;
let message =
  age >= 18 ? "You are an adult" : "You are not yet an adult";
console.log(message); // Output: "You are an adult"

// The ternary operator can be nested to handle multiple conditions.
let isMorning = true;
let isWeekend = false;
let greeting =
  isMorning
    ? isWeekend
      ? "Good morning, and it's the weekend!"
      : "Good morning, it's a weekday."
    : "Hello!";
console.log(greeting); // Output: "Good morning, it's a weekday."

// You can also use the ternary operator within template literals.
let isAdmin = true;
let userName = "Alice";
let welcomeMessage = `Welcome, ${
  isAdmin ? "Admin" : userName
}!`;
console.log(welcomeMessage); // Output: "Welcome, Admin!"

// The ternary operator is especially useful for concise, one-liner conditional assignments.
