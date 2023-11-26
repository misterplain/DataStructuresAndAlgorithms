/**
 * Given an array of numbers, write a function to find the sum of all positive numbers in the array.
 */

/**
 * Solution 1: Using a For Loop
 * Explanation:
 * - Initialize a variable `sum` to store the sum.
 * - Iterate through the array using a `for` loop.
 * - Check if the current element is positive (greater than 0).
 * - If positive, add it to the `sum`.
 * - Return the final sum of positive numbers.
 */
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  /**
   * Solution 2: Using the `reduce` Method
   * Explanation:
   * - Use the `reduce` method to perform the summing operation on the array.
   * - Check if the current element is positive using a callback function.
   * - If positive, add it to the `sum`.
   * - Initialize the initial value of `sum` as 0.
   * - Return the final result containing the sum of positive numbers.
   */
  function sumOfPositiveNumbersUsingReduce(arr) {
    return arr.reduce((sum, current) => {
      if (current > 0) {
        return sum + current;
      }
      return sum;
    }, 0);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, -1, 5, -2, 4];
  console.log(sumOfPositiveNumbers(numbers)); // Output: 15
  console.log(sumOfPositiveNumbersUsingReduce(numbers)); // Output: 15
  