//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let pigLatinMain = "";
  let pigLatinEnding = "";
  let pigLatinAy = "ay";

  const regex = /[aeiouAEIOU]/;
  const index = str.search(regex);

  if (index === 0) {
    return str + "way";
  } else if (index === -1) {
    return str + "ay";
  }

  //find main
  for (let i = index; i < str.length; i++) {
    pigLatinMain += str[i];
  }

  //consonant cluster
  for (let i = 0; i < index; i++) {
    pigLatinEnding += str[i];
  }

  return pigLatinMain + pigLatinEnding + pigLatinAy;
}

// console.log(translatePigLatin("california")); //passed
// console.log(translatePigLatin("paragraphs")) //passed
// console.log(translatePigLatin("glove")) //passed
// console.log(translatePigLatin("algorithm")) //passed
// console.log(translatePigLatin("rhythm")); //passed

//alt solution # 1 -

// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
//     : str.concat("way");
// }

//alt solution # 2 -

// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }

//alt solution # 3

// function translatePigLatin(str) {
//   return str
//     .replace(/^[aeiou]\w*/, "$&way")
//     .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
// }

//alt solution # 4 - recursive

// function translatePigLatin(str, charPos = 0) {
//   return ["a", "e", "i", "o", "u"].includes(str[0])
//     ? str + (charPos === 0 ? "way" : "ay")
//     : charPos === str.length
//     ? str + "ay"
//     : translatePigLatin(str.slice(1) + str[0], charPos + 1);
// }
