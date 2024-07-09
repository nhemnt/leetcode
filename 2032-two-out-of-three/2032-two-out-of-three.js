/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    const map = {};
    // nums1 = new Set(nums1)
    // nums2 = new Set(nums2)
    // nums3 = new Set(nums3)
    let i = 0;
    const updateMap = (key) => {
        if (map[key]) {
            map[key]++;
        } else {
            map[key] = 1
        }
    }
    while (true) {
        if (i >= nums1.length && i >= nums2.length && i >= nums3.length) {
            break;
        }
        if (i < nums1.length) {
            updateMap(`1__${nums1[i]}`)
        }
        if (i < nums2.length) {
            updateMap(`2__${nums2[i]}`)
        }
        if (i < nums3.length) {
            updateMap(`3__${nums3[i]}`)
        }
        i++
    }


    const nMap = {}
    const updatenMap = (key) => {
        if (nMap[key]) {
            nMap[key]++;
        } else {
            nMap[key] = 1
        }
    }
    for(let key in map){
        const k = key.split("__")[1];
        updatenMap(k);
    }
    const result = []; 

    for(let key in nMap){
        if(nMap[key] > 1){
            result.push(key);
        }
    }

    return result;
};