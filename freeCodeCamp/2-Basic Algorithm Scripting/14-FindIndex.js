// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  const sortedArray = arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (sortedArray[i] >= num) {
      console.log(i);
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([2, 20, 10], 19);

//alt solution # 1

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i;
//   }

//   return arr.length;
// }

//alt solution # 2

// function getIndexToIns(arr, num) {
//   return arr.filter((val) => num > val).length;
// }

//alt solution # 3

// function getIndexToIns(arr, num) {
//   // sort and find right index
//   let index = arr
//     .sort((curr, next) => curr - next)
//     .findIndex((currNum) => num <= currNum);
//   // Returns index or total length of arr
//   return index === -1 ? arr.length : index;
// }

//alt solution # 4

// function getIndexToIns(arr, num) {
//   return arr
//     .concat(num)
//     .sort((a, b) => a - b)
//     .indexOf(num);
// }
