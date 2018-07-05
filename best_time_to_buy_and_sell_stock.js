/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    prices.forEach(price => {
        if(price < minPrice) {
            minPrice = price;
        } else if(price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    })
    return maxProfit;
};

// runtime: O(n)