//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var arr = "abcdefghijklmnopqrstuvwxyz".split("");

  let missingLetter = "";

  for (let i = 0; i < str.length - 1; i++) {
    if (arr.indexOf(str[i + 1]) - arr.indexOf(str[i]) > 1) {
      const beforeIndex = arr.indexOf(str[i]);
      return (missingLetter += arr[beforeIndex + 1]);
    }
  }
  return undefined;
}

// console.log(fearNotLetter("abce")); //passed
// console.log(fearNotLetter("abcdefghjklmno")) //passed
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //passed
// console.log(fearNotLetter("bcdf"));
// console.log(fearNotLetter("stvwx")); //passed

//alt solution # 1 -

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// alt solution - # 2

function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });

  return missing;
}

//alt solution # 3 -

function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}
