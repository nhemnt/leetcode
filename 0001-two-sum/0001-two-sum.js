/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const indexing = {}
    for (let i = 0; i < nums.length; i++) {
        indexing[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {

        if (indexing[target - nums[i]] !== undefined && i !== indexing[target - nums[i]]) {
            return [i, indexing[target - nums[i]]]
        }
    }
};