/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
   
    if(nums.length <4 ) return nums.reduce((partialSum, a) => partialSum + a, 0);
    nums.sort((a,b) => a-b );
    let nearest = Infinity;
    for(let i =0 ; i< nums.length; i++){
         let j=i+1;
         let k = nums.length-1;
        while(j<k){
            const sum = nums[i] + nums[j] + nums[k];

            if(sum > target) k--;
            else j++;
            
            const diff = Math.abs(target - sum);
            if(Math.abs(target - nearest) > diff){
                nearest = sum;
            }
        }
    }
    return nearest;
};