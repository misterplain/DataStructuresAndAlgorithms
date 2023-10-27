//https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem

function convertGrades(grades) {
  let updatedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    let remainder = grades[i] % 5;

    if (grades[i] < 38 || grades[i] >= 97 || remainder < 3) {
      updatedGrades.push(grades[i]);
    } else {
      let toAdd = 5 - remainder;
      let newGrade = grades[i] + toAdd;
      updatedGrades.push(newGrade);
    }
  }

  return updatedGrades;
}

console.log(convertGrades([38, 45, 28, 97, 88, 94, 78, 40, 67, 100]));
