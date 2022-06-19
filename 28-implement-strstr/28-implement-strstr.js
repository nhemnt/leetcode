/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {  
  let i =0, j=0;

  while(j<haystack.length){
    if(j-i + 1  !== needle.length){
      j++;
    }else {
      if(haystack.substr(i,needle.length) === needle){
        return i;
      }
      i++;
    }
    
  }

  return -1
};