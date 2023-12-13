//https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
  let counter = 0;
  //   console.log(n % 10); //4
  //   console.log(Math.floor(n / 10) % 10); //2
  //   console.log(Math.floor(n / 100) % 10); //1
  //   console.log(Math.floor(n / 1000) % 10); //0
  //   console.log(Math.floor(n / 10000) % 10); //0
  let temp = n;
  while (temp > 0) {
    let divisor = temp % 10;
    if (n % divisor == 0) {
      counter++;
    }
    temp = Math.floor(temp / 10);
  }
  console.log(counter)
  return counter
}

findDigits(1245);
