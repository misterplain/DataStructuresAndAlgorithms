//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let min = prices[0];
  let max = prices[0];
  let profit = 0;

  while (right < prices.length) {
    if (prices[right] < min) {
      // If we find a new minimum price, update min and max
      min = prices[right];
      max = prices[right];
    } else if (prices[right] > max) {
      // If the current price is higher than max, update max
      max = prices[right];
    }

    // Calculate the current profit
    const currentProfit = max - min;

    if (currentProfit > profit) {
      // If the current profit is higher than the previous max profit, update profit
      profit = currentProfit;
    }

    right++;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
