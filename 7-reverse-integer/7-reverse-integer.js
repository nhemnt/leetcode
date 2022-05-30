/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const twoPowerThirtyOne = Math.pow(2, 31); 
    const max = twoPowerThirtyOne - 1;
    const min = -1 * twoPowerThirtyOne;
    let isNegative = x < 0;    
    const reverseSting = parseInt(x.toString().split("").reverse().join(""))
    const result  = isNegative ? -1 * reverseSting: reverseSting;

    return (result < min || result > max) ? 0 : result
};