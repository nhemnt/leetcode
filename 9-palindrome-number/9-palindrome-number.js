/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 ) return false;
    if(x  < 10 ) return true;
    const input = x.toString().split("");
    let j =input.length-1;
    let flag = true;
    for(let i=0; i< Math.floor(input.length/2); i++){
        if(input[i] !== input[j]){
            flag = false;
            break;
        }
        j--;
        // console.log({i,j})
    }
    return flag;
};