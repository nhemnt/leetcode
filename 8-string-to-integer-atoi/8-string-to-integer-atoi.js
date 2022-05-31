/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(str) {
    
    const s = str.trim();
    if(!(!isNaN(s[0]) || s[0] === "+" || s[0] === "-")) return 0;
    let result = !isNaN(s[0]) ? s[0]: '';
    let isNegative = s[0] === "-";
     for(let i=1; i<s.length; i++){
         console.log({s: s[i], length: s[i].length});
        if(!isNaN(s[i]) && s[i] !== " ")  {
            result += s[i]
        }else{
            break;
        };
    };
    if(result === "") return 0;
    const max = Math.pow(2,31) -1;
    const output = Math.min(parseInt(result),isNegative ?  max +1 : max);
    return isNegative ? -1*output : output;
};