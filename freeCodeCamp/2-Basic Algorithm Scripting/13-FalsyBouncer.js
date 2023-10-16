//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(Boolean(arr[i]));

    if (Boolean(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

bouncer([7, "ate", "", false, 9]);

//alt solution # 1

// function bouncer(arr) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) filteredArr.push(arr[i]);
//   }
//   return filteredArr;
// }

//alt solution # 2

// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
