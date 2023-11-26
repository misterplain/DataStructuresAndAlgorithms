//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    const indexedArray = nums.map((value, index) => ({ value, index }));

    indexedArray.sort((a, b) => a.value - b.value);
  
    let leftPointer = 0;
    let rightPointer = indexedArray.length - 1;
  
    while (leftPointer < rightPointer) {
      const currentSum = indexedArray[leftPointer].value + indexedArray[rightPointer].value;
      if (currentSum === target) {
        return [indexedArray[leftPointer].index, indexedArray[rightPointer].index];
      } else if (currentSum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }

    return [];
  };

// console.log(twoSum([2,7,11,15],9)) //passed
console.log(twoSum([2, 12, 4, 10, 5, 5, 11], 10));
