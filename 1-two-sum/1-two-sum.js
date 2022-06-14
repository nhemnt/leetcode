/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    // console.log({nums, target})
    for(let i=0; i<nums.length; i++){
        const rn = target - nums[i];
        if(obj[rn] !== undefined){
            return i < obj[rn] ? [i, obj[rn]] : [obj[rn], i];
        }
        obj[nums[i]] = i;
    }
    // console.log(obj);
};

module.exports = twoSum;