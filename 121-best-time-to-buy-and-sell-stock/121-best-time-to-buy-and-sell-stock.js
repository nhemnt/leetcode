/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const stack = [prices[prices.length -1]];
    for(let i =prices.length -2; i>=0; i--){
      if(stack[stack.length-1] <= prices[i]) stack.push(prices[i])
    }
    let max = 0;
    for(let i =0; i<prices.length-1; i++){
      if(prices[i] === stack[stack.length-1]){
        stack.pop();
      }else{
        max = Math.max(max, stack[stack.length-1] - prices[i]);
      }
    }
    return max;
};