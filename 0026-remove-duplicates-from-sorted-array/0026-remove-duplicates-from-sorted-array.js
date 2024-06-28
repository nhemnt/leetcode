/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let counter = 0;
    for (let i = 1; i < nums.length; i++) {
       if(nums[i] !== nums[counter]){
            nums[++counter] = nums[i];
       }
    }
    return counter + 1;
};