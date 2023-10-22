//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const returned = collection.filter((item) => {
    return Object.keys(source).every((key) => {
      return item.hasOwnProperty(key) && item[key] === source[key];
    });
  });

  return returned;

  console.log(returned);
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

//alt solution  # 1

// function whatIsInAName(collection, source) {
//   // What's in a name?
//   const collectionMatches = [];

//   for (let i = 0; i < collection.length; i++) {
//     let foundMismatch = false;

//     for (const sourceProp in source) {
//       if (collection[i][sourceProp] !== source[sourceProp]) {
//         foundMismatch = true;
//       }
//     }
//     if (!foundMismatch) {
//       collectionMatches.push(collection[i]);
//     }
//   }
//   return collectionMatches;
// }

//alt solution # 2

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   const souceKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter((obj) => {
//     for (let i = 0; i < sourceKeys.length; i++) {
//       if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

//alt solution # 3

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   const sourceKeys = Object.keys(source);

//   return collection.filter((obj) =>
//     sourceKeys.every((key) => obj[key] === source[key])
//   );
// }
