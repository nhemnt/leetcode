/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = nums[0], count = 1;
    for(let i =1 ; i< nums.length; i++){
        count = nums[i] === result ? ++count : --count;

        if(count === 0){
            result = nums[i];
            count = 1;
        }
    }

    return result;
};