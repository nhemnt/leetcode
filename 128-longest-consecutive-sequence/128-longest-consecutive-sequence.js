/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let max = 0;
  const m = {};
  for(let n of nums){
    if(m[n] !== undefined) continue;
    
    const l = m[n-1] || 0;
    const r = m[n+1] || 0;
    const s = l + r + 1;

    m[n-l] = s;
    m[n] = s;
    m[n+r] = s
    max = Math.max(max, s);
  }

  return max;
};