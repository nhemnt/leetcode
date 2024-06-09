/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goal = nums.length -1;
    for(let i =nums.length-1; i>=0; i--){
        const jump = i + nums[i];
        if(jump >= goal){
            goal = i;
        }

    }

    return !goal ? true : false
};