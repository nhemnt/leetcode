/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()

    for(let j =0; j< nums.length; j++){
        if(map.has(`${nums[j]}_min`)){

            const i = map.get(`${nums[j]}_min`);
            if(Math.abs(j -i) <= k){
                return true;
            }

            if(map.has(`${nums[j]}_max`)){
                const maxI = map.get(`${nums[j]}_max`);
                if(Math.abs(j-maxI) <= k){
                    return true;
                }
            }
            map.set(`${nums[j]}_max`, j);
        }else{
            map.set(`${nums[j]}_min`, j);
        }
    }

    return false;
};