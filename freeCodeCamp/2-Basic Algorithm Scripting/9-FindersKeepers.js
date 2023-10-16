//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      console.log(arr[i]);
      return arr[i];
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

//alt solution # 1

// function findElement(arr, func) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }

//   return undefined;
// }

//alt solution # 2

// function findElement(arr, func) {
//   return arr.find(func);
// }

//alt solution # 3

// function findElement(arr, func) {
//   if (arr.length > 0 && !func(arr[0])) {
//     return findElement(arr.slice(1), func);
//   } else {
//     return arr[0];
//   }
// }
