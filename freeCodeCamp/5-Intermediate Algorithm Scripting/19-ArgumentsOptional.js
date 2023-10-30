//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// function addTogether(a, b) {
//   console.log(a, b);
//   if (typeof a === "number") {
//     if (!b || b === undefined) {
//       return function (secondArg) {
//         if (typeof secondArg === "number") {
//           return a + b;
//         }
//         return undefined;
//       };
//     }
//     if (typeof b === "number") {
//       return a + b;
//     }
//     return undefined;
//   }
//   return undefined;
// }

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") {
    return undefined;
  } else if (arguments.length === 1) {
    function addSecond(second) {
      if (typeof second !== "number") {
        return undefined;
      } else {
        return first + second;
      }
    }

    return addSecond;
  } else if (typeof second !== "number") {
    return undefined;
  } else {
    return first + second;
  }
}

// console.log(addTogether(2)(3));
// console.log(addTogether(6, 3));
console.log(addTogether(5, undefined));

//alt solution # 1

function addTogether() {
  const [first, second] = arguments;

  if (typeof first === "number") {
    if (typeof second === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

//alt solution # 2

function addTogether() {
  const [first, second] = arguments;

  function addSecond(second) {
    if (typeof second === "number") return first + second;
  }

  if (typeof first === "number") {
    if (arguments.length === 1) return addSecond;
    if (arguments.length === 2) return addSecond(second);
  }
}
