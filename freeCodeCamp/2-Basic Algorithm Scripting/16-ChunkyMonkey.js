// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  let index = 0;

  while (index < arr.length) {
    let chunk = arr.slice(index, index + size);
    newArray.push(chunk);
    index += size;
  }
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

//alt solution # 1

// function chunkArrayInGroups(arr, size) {
//   let temp = [];
//   const result = [];

//   for (let a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1) temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     }
//   }

//   if (temp.length !== 0) result.push(temp);
//   return result;
// }

//alt solution # 2

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }

//alt solution # 3

// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }
