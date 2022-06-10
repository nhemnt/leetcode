/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j","k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    if(digits.length === 1) return map[digits[0]];
    const output = [];
    const merge = (i, pre = '') => {
        for(let j =0; j<map[digits[i]].length; j++){
            if(i<digits.length-1) merge(i+1, pre+map[digits[i]][j]);
            const res = pre + map[digits[i]][j]
            if(res.length === digits.length) output.push(res);

        }
    }
    merge(0)
    
    return output;
};