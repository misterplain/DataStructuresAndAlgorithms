//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let previousNumber = 0;
  let nextNumber = 1;

  let fibArray = [];

  while (previousNumber <= num) {
    if (previousNumber % 2 === 1) {
      fibArray.push(previousNumber);
    }

    let temp = nextNumber;
    nextNumber += previousNumber;
    previousNumber = temp;
  }

  let reduced = fibArray.reduce((acc, item) => acc + item);
  return reduced;
}

// console.log(sumFibs(10)); //passed
// console.log(sumFibs(1000)) //passed
// console.log(sumFibs(1))
// console.log(sumFibs(75025)); //passed
