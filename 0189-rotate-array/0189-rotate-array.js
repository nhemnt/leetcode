/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k === nums.length) return nums;
    if(k > nums.length) {
        k = k % nums.length
    }
    const temp = []
    for(let i=nums.length-k; i<nums.length; i++){
        temp.push(nums[i]);
    }

    for(let i=nums.length-k-1; i>=0; i--){
        nums[i+k] = nums[i];
    }

    for(let i= 0; i< k; i++){
        nums[i] = temp[i];
    }

};