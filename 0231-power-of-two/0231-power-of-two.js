/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 1){
        return true;
    }
    if(n <= 0){
        return false
    }
    return n % 2 === 0 && isPowerOfTwo(n/2);
};