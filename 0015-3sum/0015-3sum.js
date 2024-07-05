/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const ans = [];
    if (nums.length < 3) return ans;

    nums = nums.sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > 0) break;
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                ans.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                while (start < end && nums[start] === nums[start - 1]) start++;
                while (start < end && nums[end] === nums[end + 1]) end--;
            } else if (sum > 0) {
                end--
            } else if (sum < 0) {
                start++
            }
        }

    }

    return ans;


};