//https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=false

function bonAppetit(billItems, annaNo, annaPaid) {
  let totalShared = billItems
    .filter((item) => item !== billItems[annaNo])
    .reduce((a, b) => a + b);
  console.log(totalShared);
  let annasHalf = totalShared / 2;
  console.log(annasHalf);

  if (annasHalf === annaPaid) {
    return "Bon Appetit";
  } else {
    return annaPaid - annasHalf;
  }
}

console.log(bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288)); // 6
