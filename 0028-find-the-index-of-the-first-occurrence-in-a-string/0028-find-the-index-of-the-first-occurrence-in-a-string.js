/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle.length) return 0;
    
    for(let i =0; i<= haystack.length - needle.length; i++ ){
        let j;
        for(j=0; j<needle.length; j++ ){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        } 
        if(j === needle.length){
            return i;
        }
    }

    return -1;
    // return haystack.indexOf(needle);
};