/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const leftArray = [1, nums[0]];
    const rightArray = [nums[nums.length-1], 1];

    for (let i = 2; i < nums.length; i++) {
        leftArray.push(nums[i-1] * leftArray[leftArray.length-1]);
    }
    for(let i = nums.length-3; i>=0; i--){
        rightArray.unshift(rightArray[0] * nums[i+1])
    }

    const result = [];
    for(let i =0; i<leftArray.length; i++ ){
        let out = leftArray[i] * rightArray[i];
        if(out === -0){
            out = 0
        }
        result.push(out);
    }
    return result


};