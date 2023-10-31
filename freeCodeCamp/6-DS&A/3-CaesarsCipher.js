//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let decodedString = "";
  for (let i = 0; i < str.length; i++) {
    let alphIndex = alphabet.indexOf(str[i]);
    console.log(alphIndex);

    if (alphIndex === -1) {
      decodedString += str[i];
      continue;
    }

    if (alphIndex + 13 <= 25 && alphIndex !== -1) {
      decodedString += alphabet[alphIndex + 13];
    } else {
      const newLetter = alphabet[alphIndex + 13 - 26];
      decodedString += newLetter;
    }
  }

  return decodedString;
}

// console.log(rot13("SERR PBQR PNZC"));
// console.log(rot13("SERR YBIR?"));
// console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
