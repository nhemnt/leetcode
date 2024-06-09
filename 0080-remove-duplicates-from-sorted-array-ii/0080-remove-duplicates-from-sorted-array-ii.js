/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length;
    let writeIndex = 2;
    for(let i =2; i< nums.length; i++){
        if(nums[i] !== nums[writeIndex-2]){
            nums[writeIndex] = nums[i];
            writeIndex++
        }
    }

    return writeIndex;

};