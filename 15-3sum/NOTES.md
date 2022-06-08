**N3 solution**
```
var threeSum = function(nums) {
if(nums.length< 3) return []
nums.sort((a,b) => a-b)
const result = [], obj ={}
for(let i=0; i<nums.length-2; i++){
if(i> 0 && nums[i] === nums[i-1]) continue;
for(j =i +1; j<nums.length-1; j++){
if(j> i+1 && nums[j] === nums[j-1]) continue;
for(k =j+1; k<nums.length; k++){
if(k> j+1 && nums[k] === nums[k-1]) continue;
if(nums[i] + nums[j] + nums[k] === 0 ){
const arr = [nums[i], nums[j], nums[k] ].sort();
if(!obj[`${arr[0]}_${arr[1]}_${arr[2]}`]){
obj[`${arr[0]}_${arr[1]}_${arr[2]}`] = true
result.push(arr);
}
}
}
}
}
return result;
};
```