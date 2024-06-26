/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0], max = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(prices[i] - min, max);
        
    }
    return max;
};