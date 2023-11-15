// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation.

// **Example 1: Variable Hoisting**
console.log(myVar); // Output: undefined
var myVar = 42;
console.log(myVar); // Output: 42

// Explanation: The declaration of `myVar` is hoisted to the top, but the assignment remains in place.

// **Example 2: Function Declaration Hoisting**
hoistedFunc(); // Output: "Hello, world!"
function hoistedFunc() {
  console.log("Hello, world!");
}

// Explanation: Function declarations are fully hoisted, so you can call them before the actual declaration.

// **Example 3: Function Expression Hoisting**
nonHoistedFunc(); // Error: nonHoistedFunc is not a function
var nonHoistedFunc = function () {
  console.log("This won't work!");
};

// Explanation: Function expressions are partially hoisted; the variable declaration is hoisted, but the function assignment is not.

// **Example 4: Hoisting in Different Scopes**
function outer() {
  console.log(innerVar); // Output: undefined
  var innerVar = "I am inside!";
  console.log(innerVar); // Output: "I am inside!"
}

outer();

// Explanation: Variable declarations are hoisted within their function scope.

// In Summary:
// - Variable and function declarations are hoisted to the top of their containing scope.
// - Function declarations are fully hoisted, while function expressions are partially hoisted.
// - Be cautious with hoisting, as it can lead to unexpected behavior if not understood correctly.
