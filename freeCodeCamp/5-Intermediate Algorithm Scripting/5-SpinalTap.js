//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const splitup = str.split(/(?<=[a-z])(?=[A-Z])|[_\- ]/);

  let spinalTap = "";

  for (let i = 0; i < splitup.length; i++) {
    spinalTap += splitup[i].toLowerCase();
    if (i < splitup.length - 1) {
      spinalTap += "-";
    }
  }

  return spinalTap;
}

console.log(spinalCase("Teletubbies say Eh-oh")); //passed

//alt solution # 1 - remember the join method!

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
