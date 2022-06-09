/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i =0; j =numbers.length-1;
    while(i<j){
        // console.log({i, j , ni: numbers[i], nj: numbers[j]})
        if(numbers[i] + numbers[j] === target){
            return [i+1, j+1];
        }else if(numbers[i] + numbers[j] > target){
            j--
        }else {
            i++
        }
    }
};