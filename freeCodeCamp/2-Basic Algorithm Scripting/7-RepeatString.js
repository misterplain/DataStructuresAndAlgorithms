//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let string = "";

  for (let i = 0; i < num; i++) {
    console.log(str);
    string += str;
  }

  if (num < 0) {
    return "";
  } else {
    return string;
  }
}

repeatStringNumTimes("abcd", 3);

//alt solution # 1

// function repeatStringNumTimes(str, num) {
//   let accumulatedStr = "";

//   for (let i = 0; i < num; i++) {
//     accumulatedStr += str;
//   }

//   return accumulatedStr;
// }

//alt solution # 2

// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return "";
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }

//alt solution # 3

// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
// }
