//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(n) {
  let temporaryString = "";

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      temporaryString += " ";
    }
    for (let k = 1; k <= i; k++) {
      temporaryString += "#";
    }
    console.log(temporaryString);
    temporaryString = "";
  }
}

//alt solution # 1 - padEnd and padStart

function staircase(n) {
  for (var i = 0; i < n; i++)
    console.log("".padEnd(i + 1, "#").padStart(n, " "));
}
