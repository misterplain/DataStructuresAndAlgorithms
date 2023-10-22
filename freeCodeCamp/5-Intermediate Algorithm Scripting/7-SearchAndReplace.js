//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
  let splitUp = str.split(" ");
  let splitUpArray = [...splitUp];
  const index = splitUp.indexOf(before);
  let beforeChange = [];
  let changeItem = [];
  let afterChange = [];

  for (let i = 0; i < index; i++) {
    beforeChange.push(splitUpArray[i]);
  }

  for (let i = index + 1; i < splitUpArray.length; i++) {
    afterChange.push(splitUpArray[i]);
  }

  function isUppercase(word) {
    return word[0] === word.charAt(0).toUpperCase();
  }

  if (isUppercase(splitUpArray[index])) {
    changeItem.push(after.charAt(0).toUpperCase() + after.slice(1));
  } else {
    changeItem.push(after.charAt(0).toLowerCase() + after.slice(1));
  }

  const fullArray = [...beforeChange, ...changeItem, ...afterChange];
  const joined = fullArray.join(" ");
  return joined;
}

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //passed
// console.log(myReplace("Let us go to the store", "store", "mall")) //passed
// console.log(myReplace("I think we should look up there", "up", "Down")) //passed
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling")) //passed
// console.log(myReplace("His name is Tom", "Tom", "john")) //passed

//alt solution # 1 - don't change to array

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

//alt solution # 2 - substring

function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

//alt solution # 3

function myReplace(str, before, after) {
  const strArr = str.split(" ");
  const [wordToReplace] = strArr.filter((item) => item === before);
  const replacement =
    wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);
  return strArr.map((item) => (item === before ? replacement : item)).join(" ");
}
