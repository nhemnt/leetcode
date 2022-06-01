/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let len = nums.length;
    let i = 1
    while (i<len) {
        nums[i] += nums[i-1];
        i++
    }
    return nums;
};