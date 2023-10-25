//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let pairA = "T";
  let pairT = "A";
  let pairC = "G";
  let pairG = "C";

  let arrayFinal = [];
  let arrayTemporary = [];

  for (let i = 0; i < str.length; i++) {
    arrayTemporary.push(str[i]);
    if (str[i] === "A") {
      arrayTemporary.push(pairA);
    } else if (str[i] === "T") {
      arrayTemporary.push(pairT);
    } else if (str[i] === "C") {
      arrayTemporary.push(pairC);
    } else if (str[i] === "G") {
      arrayTemporary.push(pairG);
    }

    arrayFinal.push(arrayTemporary);
    arrayTemporary = [];
  }

  return arrayFinal;
}

console.log(pairElement("CTCTA"));

//alternative solution # 1

function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }
  return pairs;
}

//alt solution # 2

function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  // map character to array of character and matching pair
  return str.split("").map((x) => [x, pairs[x]]);
}
