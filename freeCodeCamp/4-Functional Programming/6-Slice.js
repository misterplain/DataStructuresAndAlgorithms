// The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

// Here's an example:

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// const newArray = arr.slice(1, 3);
// newArray would have the value ["Dog", "Tiger"].

// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

function sliceArray(anim, beginSlice, endSlice) {
  const animCopy = anim.slice(beginSlice, endSlice);

  return animCopy;
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// As we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to avoid any array-mutating side effects.

// Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

function nonMutatingSplice(cities) {
  const citiesCopied = cities.slice(0, 3);

  return citiesCopied;
}

console.log(
  nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])
);
