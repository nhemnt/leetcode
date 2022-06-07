/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let sorted = [];
    nums1.length = m;
    while(nums1.length && nums2.length){
        if(nums1[0] > nums2[0]){
            sorted.push(nums2[0]);
            nums2.shift();
        }else{
            sorted.push(nums1[0]);
            nums1.shift();
        }
    }
    [...sorted, ...nums1, ...nums2].forEach((x,i) => nums1[i] = x);
};