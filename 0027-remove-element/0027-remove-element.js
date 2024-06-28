/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let elementCount = 0;
    for(let i = nums.length-1; i >=0; i--){
        if(nums[i] === val){
            elementCount++
            nums[i] = nums[nums.length-elementCount];
        }
    }
    return nums.length - elementCount;
};