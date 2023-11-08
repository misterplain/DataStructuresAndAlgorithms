//https://www.hackerrank.com/challenges/making-anagrams/problem

/*
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

Example.


The only characters that match are the 's so we have to remove  from  and  from  for a total of  deletions.

Function Description

Complete the makingAnagrams function in the editor below.

makingAnagrams has the following parameter(s):

string s1: a string
string s2: a string
Returns

int: the minimum number of deletions needed
Input Format

The first line contains a single string, .
The second line contains a single string, .

Constraints

It is guaranteed that  and  consist of lowercase English letters, ascii[a-z].
Sample Input

cde
abc
Sample Output

4
Explanation

Delete the following characters from our two strings to turn them into anagrams:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
 characters have to be deleted to make both strings anagrams.
*/


function makingAnagrams(s1, s2) {
  let deleteCount = 0;
  let string1 = s1.split("").sort();
  let string2 = s2.split("").sort();

  for (let i = 0; i < string1.length; i++) {
    const char = string1[i];

    if (string2.includes(char)) {
      const indexInString2 = string2.indexOf(char);
      string2.splice(indexInString2, 1); 
    } else {
      deleteCount++;
    }
  }

  deleteCount += string2.length;

  console.log({
    string1,
    string2,
    deleteCount,
  });

  return deleteCount;
}

// console.log(makingAnagrams("cde", "abc")); //expected 4 and passed
console.log(
  makingAnagrams(
    "absdjkvuahdakejfnfauhdsaavasdlkj",
    "djfladfhiawasdkjvalskufhafablsdkashlahdfa"
  )
); 
