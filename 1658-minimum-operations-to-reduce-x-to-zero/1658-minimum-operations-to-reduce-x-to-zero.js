/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// const findSol = (nums, l, r, x) => {
//     if(x === 0 ) return 0
//     if(l>r || x < 0) return Infinity;
//     console.log({l, r, x});
//     const left = findSol(nums, l+1, r, x-nums[l]);
//     const right = findSol(nums, l, r-1, x-nums[r]);
//         // console.log({left, right, l, r, x});
//     return Math.min(left+1, right+1); 
// }
// var minOperations = function(nums, x) {
//     const result = findSol(nums, 0, nums.length-1, x);
//     return result === Infinity ?  -1 : result;
// };

var minOperations = function(nums, x) {
  let result = Infinity
      
      
  const sumRight = new Map([[0, nums.length]])
  let temp = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    temp += nums[i]
    sumRight.set(temp, i)
  }
  temp = 0
  for (let i = -1; i < nums.length; i++) {
    temp += i < 0 ? 0 : nums[i]
    if (temp > x) break
    const possibleIndex = sumRight.get(x - temp)
    if (possibleIndex !== undefined && possibleIndex > i) {
      const steps = i + 1 + (nums.length - 1 - possibleIndex + 1)
      result = Math.min(result, steps)
    }
  }
  
  return result === Infinity ? -1 : result
};