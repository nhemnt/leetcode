/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // return s.trim().split(" ").pop().length;
    let count = 0, start = false;

    for(let i = s.length-1; i >=0; i--){
        if(start){
            if(s[i] === " "){
                return count
            }
            count++;
            continue;
        }else if(s[i] !== " "){
            start = true;
            count++;
        }
    }

    return count;
};