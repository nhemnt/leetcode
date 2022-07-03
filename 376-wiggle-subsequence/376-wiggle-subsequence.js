/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {

  let res = 1,order;
  for(let i = 1; i< nums.length; i++){
    if(order === undefined){
      if(nums[i] === nums[i-1]) continue;
      res++
      order = nums[i] > nums[i-1];
    }
    else if(order){
      if(nums[i] >= nums[i-1]) continue;
      res++;
      order = !order;
    }else{
      if(nums[i-1] >= nums[i]) continue;
      res++;
      order = !order;
    }
  }
  return res;
};