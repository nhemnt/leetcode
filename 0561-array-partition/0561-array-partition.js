/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((x,y) => x-y);
    let sum = 0;
    for(let i=0; i<nums.length; i+=2){
        sum = sum + nums[i];
    }

    return sum;
};