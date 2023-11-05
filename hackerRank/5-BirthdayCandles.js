//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  // Write your code here

  let maxHeight = 0;
  let counter = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maxHeight) {
      maxHeight = candles[i];
    }
  }

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxHeight) {
      counter++;
    }
  }

  console.log(counter);
  return counter;
}

console.log(birthdayCakeCandles([3, 2, 1, 3, 3]));
