//https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let leftsum = 0;
  let rightsum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftsum = leftsum + arr[i][i];
    rightsum = rightsum = arr[i][arr.length - 1 - i];
  }

  console.log(leftsum);
  console.log(rightsum);

  console.log(Math.abs(leftsum - rightsum));

  const absoluteDifference = Math.abs(leftsum - rightsum);

  return absoluteDifference;
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
