/**
 * @param {number[]} height
 * @return {number}
 */

function NGR(arr){
    const r = [arr[arr.length-1]];
    let max = arr[arr.length-1];
    for(let i = arr.length -2; i>=0; i--){
        max = Math.max(max, arr[i]);
        r.push(max);
    }

    return r.reverse()
}

function NGL(arr){
    const r = [arr[0]];
    let max = arr[0];
    for(let i = 1; i<arr.length; i++){
        max = Math.max(max, arr[i]);
        r.push(max);
    }

    return r
}
var trap = function(height) {
    const ngl = NGL(height)
    const ngr = NGR(height);
    console.log({ngl, ngr});
    return height.reduce((acc, curr, i) => {
        return acc + Math.min(ngl[i], ngr[i]) - curr;
    }, 0)
};