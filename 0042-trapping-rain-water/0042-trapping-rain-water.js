/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
    const leftMax = [height[0]];
    const rightMax = [height[height.length - 1]];
    max = leftMax[0]
    for (let i = 1; i < height.length; i++) {
        max = Math.max(max, height[i]);
        leftMax.push(max);
    }
    max = rightMax[0]
    for (let i = height.length - 2; i >= 0; i--) {
        max = Math.max(max, height[i]);
        rightMax.unshift(max);
    }

   let result = 0;
   for(let i =1; i<leftMax.length-1; i++){
        result += Math.min(leftMax[i], rightMax[i]) - height[i] ;
   }

   return result;


};