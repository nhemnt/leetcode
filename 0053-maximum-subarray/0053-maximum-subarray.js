/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let lastMax =  nums[0];
    for(let i= 1; i< nums.length; i++){
        lastMax = Math.max(lastMax + nums[i], nums[i]);
        max = Math.max(max, lastMax);
    }

    return max;
};