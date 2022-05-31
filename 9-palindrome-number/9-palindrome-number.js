/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0) ) return false;
    if(x  < 10 ) return true;
    // console.log({x , str: x.toString().split("").reverse().join("")});
    return x.toString() == x.toString().split("").reverse().join("");
};