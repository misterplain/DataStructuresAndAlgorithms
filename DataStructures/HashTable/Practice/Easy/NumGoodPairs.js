//https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

var numIdenticalPairs = function (nums) {
  let numsObj = {};
  let goodPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (!numsObj[nums[i]]) {
      numsObj[nums[i]] = 1;
    } else {
      goodPairs = goodPairs + numsObj[nums[i]];
      numsObj[nums[i]]++;
    }
  }

  console.log({ numsObj, goodPairs });
  return goodPairs
};

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1,1,1,1]));
