//https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem

function birthday(s, d, m) {
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    let tempSum = 0;

    for (let j = i; j < i + m; j++) {
      tempSum += s[j];
    }

    if (tempSum == d) {
      counter++;
    }
  }

  return counter;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
