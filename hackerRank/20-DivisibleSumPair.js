// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=false

function divisibleSumPairs(n, k, ar) {
  // Write your code here

  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i +1; j < n; j++) {
      if ((i < j) && (ar[i] + ar[j]) % k === 0) {
        counter++;
        console.log(ar[i], ar[j])
      }
    }
  }

  console.log(counter)
  return counter
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // 5
