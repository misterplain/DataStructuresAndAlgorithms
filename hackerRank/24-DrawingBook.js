//https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=false

function pageCount(pagesLength, goalPage) {
  let pageArray = [];

  for (let i = 0; i <= pagesLength; i = i + 2) {
    pageArray.push([i, i + 1]);
  }

  console.log(pageArray);

  let counterIncrement = 0;
  for (let i = 0; i < pageArray.length; i++) {
    if (!pageArray[i].includes(goalPage)) {
      counterIncrement++;
    } else {
      break;
    }
  }

  let counterDecrement = 0;
  for (let i = pageArray.length - 1; i > 0; i--) {
    if (!pageArray[i].includes(goalPage)) {
      counterDecrement++;
    } else {
      break;
    }
  }

  const min = Math.min(counterIncrement, counterDecrement);

  return min;
}

console.log(pageCount(37455, 29835));
