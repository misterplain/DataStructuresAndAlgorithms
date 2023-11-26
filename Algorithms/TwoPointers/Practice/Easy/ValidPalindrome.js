//https://leetcode.com/problems/valid-palindrome/

// var isPalindrome = function(s) {
//     const testString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//     let palindrome = "";

//     for (let i = testString.length - 1; i >= 0; i--) {
//       palindrome += testString[i];
//     }

//     console.log({
//       testObject: "testObject",
//       testString,
//       palindrome,
//     });

//     if (palindrome === testString) {
//       return true;
//     }

//     return false;
// };

//two pointer approach

var isPalindrome = function (s) {
  const testString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  console.log(testString);

  let left = 0;
  let right = testString.length - 1;
  while (left < right) {
    if (testString[left] !== testString[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
