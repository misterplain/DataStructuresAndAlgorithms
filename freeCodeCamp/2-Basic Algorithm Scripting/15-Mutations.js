//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  for (let i = 0; i < arr[1].length; i++) {
    if (!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

//alt solution # 1 - indexOf will check if index is -1 which means it doesn't exist

// function mutation(arr) {
//   const test = arr[1].toLowerCase();
//   const target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }

//alt solution # 2 - declarative

// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function (letter) {
//       return arr[0].toLowerCase().indexOf(letter) !== -1;
//     });
// }

//alt solution # 3 - recursive

// function mutation([target, test], i = 0) {
//   target = target.toLowerCase();
//   test = test.toLowerCase();
//   return i >= test.length
//     ? true
//     : !target.includes(test[i])
//     ? false
//     : mutation([target, test], i + 1);
// }
