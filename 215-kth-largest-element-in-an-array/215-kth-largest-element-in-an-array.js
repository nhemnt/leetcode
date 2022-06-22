/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const s = new Set(nums)
    // nums = [...s];
    nums.sort((x,y) => y-x);
  // console.log(nums);
    return nums[k-1]
};