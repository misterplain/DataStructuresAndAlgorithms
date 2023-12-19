//https://www.hackerrank.com/test/e7poladlbgm/questions/5tcjlbhnckc

// function getMin(s) {
//   let counter = 0;
//   let chars = s.split(""); // Convert string to array for easier manipulation
//   console.log(chars);

//   for (let i = chars.length - 1; i >= 0; i--) {
//     console.log(chars[i]);
//     if (chars[i] === "(") {
//       console.log("es");
//       chars.splice(i, i+2); // Remove the character at index i
//       counter++;
//     }
//   }

//   console.log(chars.join("")); // Join the array back into a string

//   console.log(chars.length)
// }

// console.log(getMin("()))"));

// function getMin(s) {
//   let parenthObject = {};

//   for (let i = 0; i < s.length; i++) {
//     parenthObject.i = s[i];
//   }

//   console.log(parenthObject);
// }

// console.log(getMin("()))"));

// function getMin(s) {
//   let match = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       for (let j = i + 1; j < s.length; j++) {
//         if (s[j] === ")") {
//           match++;
//           break;
//         }
//       }
//     }
//   }

//   console.log(match);

//   console.log(s.length - match * 2);
// }

function getMin(s) {
  let stack = [];
  let unmatched = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")" && stack.length > 0) {
      stack.pop();
      stack.pop();
    } else if (s[i] === ")" && stack.length === 0) {
      unmatched++;
    }
  }

  return unmatched + stack.length;
}

console.log(getMin(")))()()()())())())))))())))))))())()))()()()))))))((("));
