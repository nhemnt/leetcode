/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length -1;
    let max = 0;

    while(left < right){
        const minHeight = Math.min(height[left], height[right]);
        const area = minHeight * (right - left);
        max = Math.max(area, max);

        if(height[left] > height[right]){
            right--;
        }else{
            left++
        }
    }

    return max;
};