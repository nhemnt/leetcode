/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let obj = {};
    let count = 1;
    let max = s.length === 1 ? 1: 0
    obj[s[0]] = 0;
    for(let i=1; i<s.length; i++){
        // console.log(i);
        if(obj[s[i]] !== undefined){
            count = 0;
            i= obj[s[i]];
            obj = {}
        }else{
            // console.log({key: s[i], count})
            obj[s[i]] = i;
            count++
             if(count>max) max =count;
        }
    }
    return max;
};