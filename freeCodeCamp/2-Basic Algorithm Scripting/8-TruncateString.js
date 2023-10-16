//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let truncatedString = "";

  if (num >= str.length) {
    return str;
  } else {
    for (let i = 0; i < num; i++) {
      truncatedString += str[i];
    }
    return truncatedString + "...";
  }
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString("Peter Piper picked a peck of pickled peppers", 11)
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);

//alt solution # 1

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

//alt solution # 2

// function truncateString(str, num) {
//   return str.length > num ? str.slice(0, num) + "..." : str;
// }
