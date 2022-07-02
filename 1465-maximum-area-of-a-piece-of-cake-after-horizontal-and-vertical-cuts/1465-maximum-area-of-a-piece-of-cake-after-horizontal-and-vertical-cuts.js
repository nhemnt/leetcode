/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((x,y) => x-y);
    verticalCuts.sort((x,y) => x-y);
    horizontalCuts.push(h);
    verticalCuts.push(w);
    let hm = horizontalCuts[0], vm = verticalCuts[0]
    for(let i =1; i< horizontalCuts.length; i++){
        hm = Math.max(hm, Number(horizontalCuts[i]) - Number(horizontalCuts[i-1]));
    }
    for(let i =1; i< verticalCuts.length; i++){
        vm = Math.max(vm, Number(verticalCuts[i]) - Number(verticalCuts[i-1]));
    }
    
    return BigInt(hm)*BigInt(vm) % BigInt(1e9+7);
    
};