//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  const testString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let palindrome = "";

  for (let i = testString.length - 1; i >= 0; i--) {
    palindrome += testString[i];
  }

  console.log({
    testObject: "testObject",
    testString,
    palindrome,
  });

  if (palindrome === testString) {
    return true;
  }

  return false;
}

// console.log(palindrome("A man, a plan, a canal. Panama")); //passed
// console.log(palindrome("never odd or even")) //passed
// console.log(palindrome("My age is 0, 0 si ega ym.")) //passed
