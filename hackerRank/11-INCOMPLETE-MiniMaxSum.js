//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=false

/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
*/

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] !== arr[i]) {
        console.log(arr[k]);
        tempSum += arr[k];
      }
    }
    minSum = maxSum;
    if (tempSum > maxSum) {
      maxSum = tempSum;
    } else if (tempSum < minSum) {
      minSum = tempSum;
    }
  }

console.log(minSum + " " + maxSum)
  return `${minSum} ${maxSum}`
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
