/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let temp = nums[0];
    let len = nums.length;
    let i = 1
    while (i<len) {
        nums[i] += temp;
        temp = nums[i];
        
        i++
    }
    return nums;
};