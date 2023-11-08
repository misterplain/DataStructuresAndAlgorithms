//https://www.hackerrank.com/challenges/string-construction/problem

/*
Amanda has a string of lowercase letters that she wants to copy to a new string. She can perform the following operations with the given costs. She can perform them any number of times to construct a new string :

Append a character to the end of string  at a cost of  dollar.
Choose any substring of  and append it to the end of  at no charge.
Given  strings , find and print the minimum cost of copying each  to  on a new line.

For example, given a string , it can be copied for  dollars. Start by copying ,  and  individually at a cost of  dollar per character. String  at this time. Copy  to the end of  at no cost to complete the copy.

Function Description

Complete the stringConstruction function in the editor below. It should return the minimum cost of copying a string.

stringConstruction has the following parameter(s):

s: a string
Input Format

The first line contains a single integer , the number of strings.
Each of the next  lines contains a single string, .

Constraints

Subtasks

 for  of the maximum score.
Output Format

For each string  print the minimum cost of constructing a new string  on a new line.

Sample Input

2
abcd
abab
Sample Output

4
2
*/

// function stringConstruction(string) {
//   // Write your code here

//   let count = 0;
//   let substrings = [];

//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i] + " at " + i);
//     // substrings.push(string[i])
//     // count++
//     let substring = "";
//     for (let j = i; j < string.length - i; j++) {
//       console.log(string[j]);
//       substring += string[j];
//        substrings.push(substring);
//     substring = "";
//     }

//   }

//   console.log({
//     substrings,
//     count,
//   });
// }

// function stringConstruction(string) {
//   // Write your code here

//   let count = 0;
//   let substrings = [];

//   for (let i = 0; i < string.length; i++) {
//     let substring = "";
//     for (let j = i; j < string.length; j++) {
//       substring += string[j];

//       if (!substrings.includes(substring)) {
//         substrings.push(substring);
//         if (substring.length === 1) {
//           count++; // Increment count for single characters
//         }
//       }
//     }
//   }

//   console.log({
//     substrings,
//     count,
//   });

//   return count;
// }

function stringConstruction(string) {
    if (string.length == 0) return 0;
  
    let count = 0;
    let substring = "";
    let stringArray = string.split("");
  
    for (let i = 0; i < string.length; i++) {
      if (substring.includes(stringArray[i]) == false) {
        substring = substring + stringArray[i];
        count++;
        continue;
      }
    }

    return count;
  }

console.log(
  stringConstruction(
    "gbcebabbfffcdgfeeaadecaeecabbabbgcafeabgecfeffcbafgdegdacefcadabbfdcgcebegbfgeeebfegfacdagbbgeagaaceefcaedceacceebdgebeecedcbdbeebecgcfcgdaaaegfbcbfffccffabbceafaagdedadbfcaedaffbaggebfedegfabefafefgdbafedbggabccaedabfgfgggbcfgeggdcdfeebaedaaccefgegbffaaggdcbbbfdbgaaffbbgcfafccdgcaabccbfbgbabegddagcgfbcdfdaccegbabfedbbdaddebddgegedgaabebfeeggddagaeececcafdgddceddcbdagaecceacgfabgccecgecgcefaafcaedfccdeeceffefadeffefggaeggbbfgcacgfaeefbfbccggcbcgeagcaacdcbegcdaacdgbebdaabddeagafbfagfebfefffcbcgefbcfeggafccabfagegccefe"
  )
);
