/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let countMap = {};
    
    function countOccurrences(nums) {
        let uniqueNums = new Set(nums);
        uniqueNums.forEach(num => {
            if (countMap[num]) {
                countMap[num]++;
            } else {
                countMap[num] = 1;
            }
        });
    }

    countOccurrences(nums1);
    countOccurrences(nums2);
    countOccurrences(nums3);

    return Object.keys(countMap).filter(key => countMap[key] > 1).map(Number);
};