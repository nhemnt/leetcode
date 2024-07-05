/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const obj = {};
    for(let i =0; i< numbers.length; i++){
        obj[numbers[i]] = i;
    }

    for(let i =0; i<numbers.length; i++){
        const diff = target - numbers[i];
        if(obj[diff] !== undefined){
            return [i + 1, obj[diff] + 1];
        }
    }
};