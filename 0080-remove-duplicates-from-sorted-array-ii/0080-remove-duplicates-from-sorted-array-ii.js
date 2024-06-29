/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 2;
    for(let i =2; i< nums.length; i++){
        if(nums[i] !== nums[counter-2]){
            nums[counter] = nums[i];
            counter++
        }
    }
    return counter;
};