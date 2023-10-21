//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  let differenceArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      differenceArray.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) {
      differenceArray.push(arr2[i]);
    }
  }

  return differenceArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //passed

//alt solution # 1 - imperative solution

// function diffArray(arr1, arr2) {
//   const newArr = [];

//   function onlyInFirst(first, second) {
//     // Looping through an array to find elements that don't exist in another array
//     for (let i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         // Pushing the elements unique to first to newArr
//         newArr.push(first[i]);
//       }
//     }
//   }

//   onlyInFirst(arr1, arr2);
//   onlyInFirst(arr2, arr1);

//   return newArr;
// }

//alt solution # 2 - declarative solution

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter((item) => !arr1.includes(item) || !arr2.includes(item));
// }

//alt solution # 3 - declarative

// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];

//   function diff(a, b) {
//     return a.filter((item) => b.indexOf(item) === -1);
//   }
// }
