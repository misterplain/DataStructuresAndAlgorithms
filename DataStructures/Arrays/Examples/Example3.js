/**
 * You are given two sorted arrays, arr1 and arr2, of the same length n.
 * Merge these two arrays into a single sorted array without using extra space.
 */

/**
 * Solution 1: Using an Extra Array (Not Recommended)
 * Explanation:
 * - Create a new array `result` with a length of 2*n to accommodate the merged elements.
 * - Initialize pointers `p1` and `p2` for arr1 and arr2, respectively, starting from the end of both arrays.
 * - Initialize a pointer `p` at the last index of the result array.
 * - Compare elements at p1 and p2 and place the larger element at the end of the result array.
 * - Decrement the corresponding pointer and move the result pointer to the previous index.
 * - Continue this process until both arr1 and arr2 are merged into the result array.
 * - The result array will contain the merged sorted elements.
 */
function mergeSortedArrays(arr1, arr2) {
  const result = new Array(2 * arr1.length); // Create a new array with enough space
  let p1 = arr1.length - 1; // Pointer for arr1
  let p2 = arr2.length - 1; // Pointer for arr2
  let p = result.length - 1; // Pointer for result array

  while (p1 >= 0 && p2 >= 0) {
    if (arr1[p1] > arr2[p2]) {
      result[p] = arr1[p1]; // Place the larger element from arr1
      p1--;
    } else {
      result[p] = arr2[p2]; // Place the larger element from arr2
      p2--;
    }
    p--;
  }

  // Copy any remaining elements from arr1 if any
  while (p1 >= 0) {
    result[p] = arr1[p1];
    p1--;
    p--;
  }

  // Copy any remaining elements from arr2 if any
  while (p2 >= 0) {
    result[p] = arr2[p2];
    p2--;
    p--;
  }

  return result;
}

/**
 * Solution 2: In-Place Merging (Not Recommended)
 * Explanation:
 * - Start merging from the end of both arrays (highest values).
 * - Compare elements at the end of arr1 and arr2.
 * - Place the larger element at the end of arr1.
 * - Decrement pointers p1 and p2 accordingly.
 * - Continue this process until all elements from arr2 are merged into arr1.
 * - arr1 will contain the merged sorted elements.
 * - Note: This solution modifies the original arr1.
 */
function mergeSortedArraysInPlace(arr1, arr2) {
  let p1 = arr1.length - 1; // Pointer for arr1
  let p2 = arr2.length - 1; // Pointer for arr2
  let p = arr1.length + arr2.length - 1; // Pointer for merged array

  while (p1 >= 0 && p2 >= 0) {
    if (arr1[p1] > arr2[p2]) {
      arr1[p] = arr1[p1]; // Place the larger element from arr1 at the end
      p1--;
    } else {
      arr1[p] = arr2[p2]; // Place the larger element from arr2 at the end
      p2--;
    }
    p--;
  }

  // If there are remaining elements in arr2, copy them to arr1
  while (p2 >= 0) {
    arr1[p] = arr2[p2];
    p2--;
    p--;
  }

  return arr1;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSortedArraysInPlace(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
