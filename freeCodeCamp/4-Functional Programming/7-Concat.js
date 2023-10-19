// Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

// [1, 2, 3].concat([4, 5, 6]);
// The returned array would be [1, 2, 3, 4, 5, 6].

// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

function nonMutatingConcat(original, attach) {
  const concatted = first.concat(second);
  console.log(concatted);

  return concatted;
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//use concat instead of push

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

const first1 = [1, 2, 3];
const second1 = [4, 5];
nonMutatingPush(first1, second1);
