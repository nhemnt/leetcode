/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapping = {
        "I": "1",
        "V": "5",
        "X": "10",
        "L": "50",
        "C": "100",
        "D": "500",
        "M": "1000"
    };
    let result = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i+1] && Number(mapping[s[i+1]]) > Number(mapping[s[i]]) ){
            // console.log({i, si: mapping[s[i+1]],sii :  mapping[s[i]] })
            result += mapping[s[i+1]] - mapping[s[i]];
            i++;
        }else{
            result += Number(mapping[s[i]])
        }
    }
    return result;
};