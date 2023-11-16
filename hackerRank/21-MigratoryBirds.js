//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=false

function migratoryBirds(arr) {

  let typeObject = {};

  for (let i = 0; i < arr.length; i++) {
    if (typeObject[arr[i]]) {
      typeObject[arr[i]]++;
    } else {
      typeObject[arr[i]] = 1;
    }
  }

  const keys = Object.entries(typeObject);
  console.log(keys);

  let max = 0;
  let type = 0;

  for (let i = 0; i < keys.length; i++) {
    if (keys[i][1] > max) {
      max = keys[i][1];
      type = keys[i][0];
    }
  }

  console.log({
    max,
    type,
  });

  return type 
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
