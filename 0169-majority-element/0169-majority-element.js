/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0, count =1;
    for(let i =1; i< nums.length; i++){
        if(nums[res] === nums[i]){
            count++
        }else{
            count--
        }

        if(count === 0){
            res= i;
            count =1;
        }
    }

    return nums[res];
};