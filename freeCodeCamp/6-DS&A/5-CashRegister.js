//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  const getCurrencyValue = (item) => {
    switch (item) {
      case "PENNY":
        return 0.01;
      case "NICKEL":
        return 0.05;
      case "DIME":
        return 0.1;
      case "QUARTER":
        return 0.25;
      case "ONE":
        return 1;
      case "FIVE":
        return 5;
      case "TEN":
        return 10;
      case "TWENTY":
        return 20;
      case "ONE HUNDRED":
        return 100;
    }
  };

  let cashInDrawer = cid.map((item) => {
    return {
      currencyName: item[0],
      currencyAmount: item[1],
      currencyValue: getCurrencyValue(item[0]),
    };
  });

  let change = cash - price;
  console.log(change);

  let changeObject = { status: "INSUFFICIENT_FUNDS", change: [] };

  while (change > 0) {
    let changeGiven = false;

    for (let i = cashInDrawer.length - 1; i >= 0; i--) {
      if (
        change >= cashInDrawer[i].currencyValue &&
        cashInDrawer[i].currencyAmount > 0
      ) {
        let amountToGive = Math.min(
          Math.floor(change / cashInDrawer[i].currencyValue) *
            cashInDrawer[i].currencyValue,
          cashInDrawer[i].currencyAmount
        );

        change -= amountToGive;
        change = parseFloat(change.toFixed(2));

        cashInDrawer[i].currencyAmount -= amountToGive;
        cashInDrawer[i].currencyAmount = parseFloat(
          cashInDrawer[i].currencyAmount.toFixed(2)
        );

        let existingCurrency = changeObject.change.find(
          (item) => item[0] === cashInDrawer[i].currencyName
        );

        if (existingCurrency) {
          existingCurrency[1] += amountToGive;
        } else {
          changeObject.change.push([
            cashInDrawer[i].currencyName,
            amountToGive,
          ]);
        }

        changeGiven = true;
        break;
      }
    }

    if (!changeGiven) {
      changeObject.status = "INSUFFICIENT_FUNDS";
      changeObject.change = [];
      return changeObject;
    }
  }

  if (cashInDrawer.every((currency) => currency.currencyAmount === 0)) {
    changeObject.status = "CLOSED";
    changeObject.change = cid;
  } else {
    changeObject.status = "OPEN";
  }

  return changeObject;
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 1],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
