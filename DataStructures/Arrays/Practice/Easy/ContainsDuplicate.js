//https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

var containsDuplicate = function (nums) {
  let existing = {};

  for (let i = 0; i < nums.length; i++) {
    if (!existing[nums[i]]) {
      existing[nums[i]] = 1;
    } else {
      existing[nums[i]]++;
    }
  }

  const valuesArray = Object.values(existing);

  const yesDuplicates = !valuesArray.every((item) => item <= 1);
  console.log(yesDuplicates);

  return yesDuplicates;
};

//other answer
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
