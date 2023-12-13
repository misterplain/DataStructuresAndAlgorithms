//https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

var canConstruct = function (ransomNote, magazine) {
  let magazineObject = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magazineObject[magazine[i]]) {
      magazineObject[magazine[i]]++;
    } else {
      magazineObject[magazine[i]] = 1;
    }
  }

  console.log(magazineObject);

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineObject[ransomNote[i]]) {
      magazineObject[ransomNote[i]]--;
    } else {
      return false;
    }
  }

  return true;
};


console.log(canConstruct("aa", "aab"));
