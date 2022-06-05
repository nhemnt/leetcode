/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = strs[0]?.[0] || ''
    let i = 0;
    let j = 0;
    let cond = true;
    let end = false;
    while(cond){
        if(strs[i][j] !== res[j]){
            console.log({s:strs[i][j], res})
            res = res.substr(0, res.length - 1);
            break
        }
        
        if(i === strs.length-1){
            i = 0;
            j++;
            if(strs[0][j]){
                res += strs[0][j];                
            }else{
            // console.log({s:strs[i][j], res, break: true})

                break;
            }

        }else{
            i++;
        }
        if(j === strs[0].length ){
            break
        }
        
            
    }
    return res
};