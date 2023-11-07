// The switch statement is used for making decisions based on multiple possible values of a single expression.
let dayOfWeek = "Monday";
let message;

// Simple switch statement with cases for each day of the week.
switch (dayOfWeek) {
  case "Monday":
    message = "It's the start of the week.";
    break;
  case "Tuesday":
    message = "Tuesday is another workday.";
    break;
  case "Wednesday":
    message = "We're halfway through the week.";
    break;
  case "Thursday":
    message = "Thursday is almost there!";
    break;
  case "Friday":
    message = "TGIF! It's Friday!";
    break;
  default:
    message = "It's the weekend!";
}

console.log(message); // Output: "It's the start of the week."

// The switch statement evaluates the expression and matches it with a case label.
// When a match is found, the code within that case is executed.
// The 'break' statement is used to exit the switch statement after a match.

// You can use a 'default' case to handle values that don't match any case.

// The switch statement can also be used for numeric values.
let grade = 85;
let gradeMessage;

switch (true) {
  case grade >= 90:
    gradeMessage = "A";
    break;
  case grade >= 80:
    gradeMessage = "B";
    break;
  case grade >= 70:
    gradeMessage = "C";
    break;
  case grade >= 60:
    gradeMessage = "D";
    break;
  default:
    gradeMessage = "F";
}

console.log(gradeMessage); // Output: "B"

// In this example, we use 'true' as the switch expression and compare it with conditions.
// This allows us to check ranges of values.

// The switch statement is a powerful tool for handling multiple cases and making code more readable.
