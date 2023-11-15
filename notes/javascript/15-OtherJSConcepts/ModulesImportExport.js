// Modules in JavaScript allow you to organize and encapsulate code into separate files.
// You can use the `import` and `export` keywords to work with modules.

// **Example 1: Exporting Variables and Functions**
// Exporting in a module named "myModule.js"
// myModule.js
// Exporting a variable
export const greeting = "Hello";

// Exporting a function
export function sayHello(name) {
  return `${greeting}, ${name}!`;
}

// Importing in another module
// main.js
import { greeting, sayHello } from "./myModule.js";

console.log(greeting); // Output: "Hello"
console.log(sayHello("Alice")); // Output: "Hello, Alice!"

// Explanation: You can export and import variables and functions between modules.

// **Example 2: Default Exports**
// Exporting a default value in "myModule.js"
// myModule.js
const secretNumber = 42;
export default secretNumber;

// Importing the default export
// main.js
import secretNumber from "./myModule.js";

console.log(secretNumber); // Output: 42

// Explanation: You can export a default value from a module and import it without braces.

// **Example 3: Named and Default Exports Combined**
// myModule.js
export const x = 10;
export const y = 20;

// const defaultValue = 30;
// export default defaultValue; //module cannot have multiple exports

// Importing both named and default exports
// main.js
import { x, y, default as z } from "./myModule.js";

console.log(x, y); // Output: 10 20
console.log(z); // Output: 30

// Explanation: You can combine named and default exports in the same module.

// **Example 4: Dynamic Imports (Advanced)**
// Dynamically load a module at runtime
// main.js
async function loadModule() {
  const myModule = await import("./myModule.js");
  console.log(myModule.greeting); // Output: "Hello"
}

loadModule();

// Explanation: Dynamic imports allow you to load modules asynchronously.

// In Summary:
// - Modules help organize code into separate files for better maintainability.
// - You can export variables, functions, and objects using `export`.
// - Use `import` to bring exported items from one module into another.
// - Default exports allow you to export a single value as the default export.
// - You can combine named and default exports in a module.
// - Dynamic imports enable loading modules asynchronously at runtime.
