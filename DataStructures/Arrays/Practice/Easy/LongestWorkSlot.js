//https://www.hackerrank.com/test/e7poladlbgm/questions/ejgdr5i8eg8

function findLongestSingleSlot(leaveTimes) {
  let timeWorked = {};
  let endTime = 0;

  for (let i = 0; i < leaveTimes.length; i++) {
    let employee = leaveTimes[i][0];
    let finishTime = leaveTimes[i][1];

    if (!timeWorked[employee]) {
      timeWorked[employee] = finishTime - endTime;
    } else if (
      timeWorked[employee] &&
      timeWorked[employee] < finishTime - endTime
    ) {
      timeWorked[employee] = finishTime - endTime;
    }

    endTime = finishTime;
  }

  let maxEmployee = Object.keys(timeWorked).reduce((a, b) =>
    timeWorked[a] > timeWorked[b] ? a : b
  );

  maxEmployee = +maxEmployee;

  let maxHours = timeWorked[maxEmployee];

  let letterCode = String.fromCharCode("a".charCodeAt(0) + maxEmployee);

  console.log({
    maxEmployee,
    maxHours,
    letterCode,
    timeWorked,
  });

  return letterCode
}

console.log(
  findLongestSingleSlot([
    [0, 2],
    [1, 3],
    [0, 7],
  ])
);

// console.log(
//   findLongestSingleSlot([
//     [0, 1],
//     [0, 3],
//     [4, 5],
//     [5, 6],
//     [4, 10],
//   ])
// );
