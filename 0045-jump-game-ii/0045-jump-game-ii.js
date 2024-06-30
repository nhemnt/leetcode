/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let max = 0;
    let oldMax = 0;
    let jump =0;

    for(let i =0; i<nums.length; i++){
        if(nums.length < 2) return 0
        max = Math.max(max, i + nums[i]);

        if(i === oldMax){
            oldMax = max;
            jump++;

            if(oldMax >= nums.length -1){
                break
            }
        }
    }

    return jump;
};