/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let isEven = (nums1.length + nums2.length) %2 === 0;

    let index = (nums1.length + nums2.length) / 2;
    let arr = [];
    while(nums1.length && nums2.length){
        if(nums1[0] > nums2[0]){
            arr.push(nums2.shift());
        }else {
            arr.push(nums1.shift())
        }
    }
    arr = [...arr, ...nums1, ...nums2];
    let mid = parseInt(arr.length/2);
    return (isEven ? (arr[mid] +arr[mid-1])/2 :arr[mid]).toFixed(5);
};