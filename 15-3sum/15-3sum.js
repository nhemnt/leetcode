/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length< 3) return []
    nums.sort((a,b) => a-b)
    const result = [];
    const target = 0;
    for(let i=0; i<nums.length-2; i++){
        if(i> 0 && nums[i] === nums[i-1]) continue;
        
        let j = i+1;
        let k = nums.length -1;
        
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k];
            
            if(sum === target){
                result.push([nums[i], nums[j], nums[k]]);
                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;
                j++; k--;
            }else if(sum > target){
                k--
            }else{
                j++
            }
        }
    }
    
    return result;
};