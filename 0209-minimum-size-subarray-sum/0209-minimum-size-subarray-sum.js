/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, min = Infinity, sum = 0;
    while(right < nums.length){
        sum += nums[right];
        right++
        while(sum >= target){
            const window = right - left;
            min = Math.min(min, window);
            sum -= nums[left]
            left++;
        }
    }

    return min === Infinity ? 0 : min
};