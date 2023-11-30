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
  let minSum = Infinity; // Number.MAX_SAFE_INTEGER;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    for (let k = 0; k < arr.length; k++) {
      if (k !== i) {
        // console.log(arr[k]);
        tempSum += arr[k];
      }
    }
    console.log(tempSum + "tempSum");
    // minSum = maxSum;
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    if (tempSum < minSum) {
      minSum = tempSum;
    }
  }

  console.log(minSum + " " + maxSum);
  // return `${minSum} ${maxSum}`;
}

console.log(
  miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127])
);

//1735893734 2199437821
//expected 1640793344 2199437821
