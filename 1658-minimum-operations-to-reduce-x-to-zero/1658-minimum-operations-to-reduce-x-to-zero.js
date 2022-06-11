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


// [[A] , [B], [C] ]
// [A] + [C] = x
// x - [A] = [C];
// [1 ,1 ,4,2,3]  => input
// [0 ,1 ,2,3,4]  => index
// [11,10,9,5,3]  => rSum
// 5 => target
   // [3] => i =1, j = 4 (nums.length - j)


var minOperations = function(nums, x) {
  let result = Infinity;
  let rSumMap = new Map([[0, nums.length]]);
  let temp = 0;
  for(let i = nums.length-1; i>=0; i--){
    temp += nums[i];
    rSumMap.set(temp,i);
  }
  // console.log(rSumMap);
  
  temp = 0;
  for(let i =-1; i<nums.length; i++){
    temp += i < 0 ? 0 : nums[i];
    if(temp > x) break;
    const j = rSumMap.get(x-temp);
    if(j !== undefined && j > i){
      const steps = i + 1 + nums.length - j;
      result = Math.min(steps, result);
    }
    
  }
  return result === Infinity ? -1 : result;
};