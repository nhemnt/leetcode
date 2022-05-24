/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let max = 0, m, n, result = '';
    for(let i =0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++){
            let flag = 1;
            for(k=0; k< (j - i + 1)/2 ; k++){
                // console.log({si: s[i+k], sj : s[j-k]}, flag)
                if(s[i+k] !== s[j-k]){
                    flag = 0;
                    break;
                }
            }
            // console.log(flag)
            if(flag !== 0 && (j-i+1) > max){
                // console.log({j,i,max});
                max = j-i+1;
                m = i;
                n = j;
            }
        }
    }
    // console.log({m,n});
    for(let i = m; i<=n; i++){
        result += s[i];
    }
    
    return result || s[0];
    
};