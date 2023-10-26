//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let sortedArray = arr.sort((a, b) => a - b);

  for (let i = sortedArray[0] + 1; i < sortedArray[1]; i++) {
    sortedArray.push(i);
  }

  let minDivisible = sortedArray[1]; // 5 start point
  let maxDivisible = sortedArray.reduce((acc, item) => acc * item);
  let arrayOfDivisibles = [];

  for (let i = minDivisible; i <= maxDivisible; i++) {
    if (sortedArray.every((value) => i % value === 0)) {
      arrayOfDivisibles.push(i);
    }
  }

  return Math.min(...arrayOfDivisibles);
}

// console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([23, 18])) //passed
// console.log(smallestCommons([1, 13])) //passed

//alt solution # 1 -

// Find the SCM of a range of numbers
function smallestCommons(arr) {
  const primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    const currentFactors = getPrimeFactors(i);
    for (let prime in currentFactors) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
        primeFactors[prime] = currentFactors[prime];
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let prime in primeFactors) {
    multiple *= prime ** primeFactors[prime];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let i = 2; i <= num; i++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while (num % i === 0) {
      factors[i] = factors[i] ? factors[i] + 1 : 1;
      num /= i;
    }
  }
  return factors;
}
