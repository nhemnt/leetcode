/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const twoPowerThirtyOne = Math.pow(2, 31); 
    const max = twoPowerThirtyOne - 1;
    let isNegative = x < 0;    
    const reverseSting = parseInt(x.toString().split("").reverse().join(""))

    return (reverseSting > max) ? 0 : isNegative ? -1*reverseSting :  reverseSting;
};