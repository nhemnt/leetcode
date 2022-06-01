/**
* @param {number[]} height
* @return {number}
*/
**N2 solution**
*55 / 60 test cases passed.*
var maxArea = function(height) {
let max = 0;
const obj = {}
for(let i =0; i<height.length; i++){
for(let j=i+1; j<height.length; j++){
// console.log({j,i,diff: j-i,
//         min: Math.min(height[i], height[j]),
//              hi: height[i], hj: height[j]})
const tempMax = (j-i)* Math.min(height[i], height[j])
// console.log({tempMax, curr: height[i]});
if(!obj[height[i]]){
obj[height[i]] = tempMax
}else {
if(tempMax> obj[height[i]]){
obj[height[i]] = tempMax
}
}
if(tempMax > max){
max = tempMax;
}
}
}
console.log(obj)
return max;
};