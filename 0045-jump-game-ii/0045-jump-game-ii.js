/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums, length = 0, memo= {}) {
    // let max = 0;
    // let oldMax = 0;
    // let jump =0;

    // for(let i =0; i<nums.length; i++){
    //     if(nums.length < 2) return 0
    //     max = Math.max(max, i + nums[i]);

    //     if(i === oldMax){
    //         oldMax = max;
    //         jump++;

    //         if(oldMax >= nums.length -1){
    //             break
    //         }
    //     }
    // }

    // return jump;

    if(length >= nums.length-1) return 0;

    if(memo[length] !== undefined) return memo[length];

    const maxJump = nums[length];

    if(maxJump === 0) return Infinity;

    let minJump = Infinity;

    for(let i =1; i<= maxJump; i++){
        const nextJump = jump(nums, i + length, memo);
        if(nextJump !== Infinity){
            minJump = Math.min(minJump, nextJump +1);
        }
    }
    memo[length]= minJump;
    return minJump;

};