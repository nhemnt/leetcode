/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let prev = nums[0];
  let result = 1
  for(let i =1; i< nums.length; i++){
      if(prev !== nums[i]){
        nums[result] = nums[i];
        result++
        prev= nums[i]
      }
  }
  
  return result;
};