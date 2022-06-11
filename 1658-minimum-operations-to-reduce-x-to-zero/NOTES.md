**Math.pow(2,n)**
```
const findSol = (nums, l, r, x) => {
if(x === 0 ) return 0
if(l>r || x < 0) return Infinity;
const left = findSol(nums, l+1, r, x-nums[l]);
const right = findSol(nums, l, r-1, x-nums[r]);
// console.log({left, right, l, r, x});
return Math.min(left+1, right+1);
}
var minOperations = function(nums, x) {
const result = findSol(nums, 0, nums.length-1, x);
return result === Infinity ?  -1 : result;
};
```