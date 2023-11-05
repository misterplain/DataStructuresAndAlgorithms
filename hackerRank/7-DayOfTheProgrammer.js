//https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  //julian
  if (year < 1918) {
    if (year % 4 === 0) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  }

  //gregorian
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  }

  //if 1918 -not leap year
  //26th sept
  if (year === 1918) {
    return "26.09." + year;
  }
}

console.log(dayOfProgrammer(1918));
