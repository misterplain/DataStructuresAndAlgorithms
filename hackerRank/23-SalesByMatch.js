//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=false

function sockMerchant(n, ar) {
  let sockObject = {};

  for (let i = 0; i < ar.length; i++) {
    if (sockObject[ar[i]]) {
      sockObject[ar[i]]++;
    } else {
      sockObject[ar[i]] = 1;
    }
  }

  let loneSocks = 0;
  let sockObjectArray = Object.values(sockObject);

  for (let i = 0; i < sockObjectArray.length; i++) {
    if (sockObjectArray[i] % 2 !== 0) {
      loneSocks++;
    }
  }

  const pairs = (ar.length - loneSocks) / 2;
  return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
