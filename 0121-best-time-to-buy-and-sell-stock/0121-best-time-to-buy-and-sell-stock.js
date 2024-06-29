/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let LTR = [prices[prices.length - 1]];

    for (let i = prices.length - 2; i >= 0; i--) {
        if (LTR[LTR.length - 1] < prices[i]) {
            LTR.push(prices[i])
        } else {
            LTR.push(LTR[LTR.length - 1])
        }
    }
    LTR = LTR.reverse();
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        max = Math.max(LTR[i] - prices[i], max);
    }

    return max
};