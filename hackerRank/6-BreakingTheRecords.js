//https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  // Write your code here

  let minimum = scores[0];
  let maximum = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minimum) {
      minimum = scores[i];
      minCount++;
    }

    if (scores[i] > maximum) {
      maximum = scores[i];
      maxCount++;
    }
  }

  return [maxCount, minCount];
}

console.log(breakingRecords([12, 24, 10, 24]));
