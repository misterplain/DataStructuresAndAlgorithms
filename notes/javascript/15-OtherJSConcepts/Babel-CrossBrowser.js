// Babel is a JavaScript transpiler that converts modern JavaScript code (ES6+)
// into older versions (ES5) to ensure compatibility with a wider range of browsers.

// **Example 1: Using Babel CLI**
// Transpiling JavaScript using Babel CLI (Command Line Interface).

// Install Babel CLI and preset-env:
// npm install -g @babel/core @babel/cli @babel/preset-env

// Create a .babelrc file with preset configuration:
// {
//   "presets": ["@babel/preset-env"]
// }

// Transpile a JavaScript file:
// babel source.js -o output.js

// Explanation: This example demonstrates transpiling a JavaScript file from ES6+ to ES5 using Babel CLI.

// **Example 2: Babel in a Build Tool (e.g., Webpack)**
// Integrating Babel with a build tool like Webpack.

// Install required packages:
// npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env

// Create a webpack.config.js file:
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// };

// Explanation: This code sets up Babel with Webpack to transpile ES6+ code as part of the build process.

// **Example 3: Using Babel in a JavaScript Project**
// Integrating Babel into a JavaScript project with npm scripts.

// Install required packages:
// npm install --save-dev @babel/core @babel/preset-env

// Update package.json with npm scripts:
// "scripts": {
//   "build": "babel src -d dist"
// }

// Transpile the code using npm run build.

// Explanation: This example shows how to integrate Babel into a JavaScript project and use npm scripts for transpilation.

// **Example 4: Ensuring Cross-Browser Compatibility**
// Handling cross-browser compatibility with Babel.

// ES6 code (source.js):
// const greeting = "Hello, world!";
// console.log(greeting);

// Transpiled ES5 code (output.js) by Babel:
// "use strict";

// var greeting = "Hello, world!";
// console.log(greeting);

// Explanation: Babel transpiles ES6 code to ES5 to ensure compatibility with older browsers that do not support ES6 features.

// In Summary:
// - Babel is a JavaScript transpiler used to convert modern JavaScript code to older versions.
// - It ensures cross-browser compatibility by allowing developers to write ES6+ code that runs on older browsers.
// - Babel can be used through the CLI, integrated with build tools like Webpack, or integrated into a JavaScript project with npm.
