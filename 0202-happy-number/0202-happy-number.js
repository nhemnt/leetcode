/**
 * @param {number} n
 * @return {boolean}
 */

const getSquareSum = (num) => {
    num = num.toString();
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i] * num[i]
    }
    return sum
}

var isHappy = function (n) {
    const numbers = {};
    const endlessLoop = (num) => {
        const sum = getSquareSum(num);
        if(sum === 1){
            return true;
        }
        if(numbers[sum] !== undefined){
            return false;
        }
        numbers[sum] = 1;
        return endlessLoop(sum)
    }
    return endlessLoop(n)


};