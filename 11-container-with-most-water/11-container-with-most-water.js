/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i=0, j = height.length-1;
    while(i < j){
        // console.log({i: height[i],j: height[j]})
            max = Math.max(max, (j-i) * Math.min(height[i], height[j]));
            if(height[i]>height[j]){
                j--
            }else{
                i++
            }
                // console.log({i,j, des: true})
    }
    return max;
};