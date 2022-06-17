/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let result = 0;
  for(let i =0; i<nums.length; i++){
    nums[i-result] = nums[i];
      if(nums[i] === val){
         result++
      }
    
  }
  
  return nums.length - result;
};