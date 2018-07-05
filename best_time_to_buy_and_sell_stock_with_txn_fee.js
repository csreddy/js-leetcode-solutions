/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let hold = -prices[0], cash = 0;
    for (let i = 1; i < prices.length; i++) {
       let temp = hold;
       hold = Math.max(hold, cash - prices[i])
       cash = Math.max(cash, temp + prices[i] - fee)
    }
    return Math.max(hold, cash);
};

console.log(maxProfit([1,3,2,8,4,9], 2));