/**
 * Given an array of integers, write a function to find the largest subarray sum
 * (the sum of consecutive elements) within the array.
 */

/**
 * Solution 1: Using a For Loop
 * Explanation:
 * - Initialize variables `maxSum` and `currentSum` to track the maximum subarray sum and the current subarray sum.
 * - Iterate through the array using a `for` loop.
 * - For each element, update `currentSum` to be the maximum of the current element or the sum of the current element and `currentSum`.
 * - Update `maxSum` to be the maximum of `maxSum` and `currentSum` in each iteration.
 * - Return `maxSum` as the largest subarray sum.
 */
function largestSubarraySum(arr) {
  let maxSum = arr[0]; // Initialize maxSum with the first element
  let currentSum = arr[0]; // Initialize currentSum with the first element

  for (let i = 1; i < arr.length; i++) {
    // Start iterating from the second element
    currentSum = Math.max(arr[i], currentSum + arr[i]); // Update currentSum
    maxSum = Math.max(maxSum, currentSum); // Update maxSum
  }

  return maxSum; // Return the largest subarray sum
}

/**
 * Solution 2: Using Dynamic Programming
 * Explanation:
 * - Initialize variables `maxSum` and `currentSum` to track the maximum subarray sum and the current subarray sum.
 * - Iterate through the array using a `for` loop.
 * - For each element, calculate `currentSum` as the maximum of the current element or the sum of the current element and `currentSum`.
 * - Update `maxSum` to be the maximum of `maxSum` and `currentSum` in each iteration.
 * - Return `maxSum` as the largest subarray sum.
 */
function largestSubarraySumDynamicProgramming(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(largestSubarraySum(numbers)); // Output: 6 (subarray: [4, -1, 2, 1])
console.log(largestSubarraySumDynamicProgramming(numbers)); // Output: 6 (subarray: [4, -1, 2, 1])
