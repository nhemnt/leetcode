/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const l = [...nums];
  for(let i=1; i< l.length; i++){
    l[i] += l[i-1];
  }
  for(let i = nums.length-2; i>=0; i-- ){
    nums[i] += nums[i+1];
  }

  for(let i =0; i<nums.length; i++){
    if(l[i] === nums[i]) return i;
  }
  return -1;
};