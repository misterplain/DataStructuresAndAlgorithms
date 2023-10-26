//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  const newFunction = func;
  let shiftedArray = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (newFunction(arr[i]) === true) {
      return shiftedArray.slice(i);
    }
  }

  return [];
}

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n >= 3;
//   })
// ); //passed
// console.log(
//   dropElements([1, 2, 3, 4, 5], function (n) {
//     return n < 3;
//   })
// );

// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))

//alt solution # 1 -

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

//alt solution # 2 -

function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

//alt solution # 3

function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

//alt solution # 4 -

function dropElements(arr, func) {
  return arr.length > 0 && !func(arr[0])
    ? dropElements(arr.slice(1), func)
    : arr;
}
