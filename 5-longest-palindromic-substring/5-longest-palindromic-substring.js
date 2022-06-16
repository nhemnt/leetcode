/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let max = 0;

    const dp = [...new Array(s.length)].map(() => new Array(s.length).fill(''))

    let i =0, j= 0; k =0;
    let m,n;
    while(i<s.length){
        if(i === 0){
            while(j<s.length){
                // console.log({j,k});
                dp[j][k] = 1;
                j++;
                k++
                if(k-j+1 > max){
                    max = k-j+1;
                    m = j;
                    n = k;
                }
            }
        }else{
            j = 0; k =i;
            
            while(k<s.length){
                // console.log({i,j ,k ,l: s[i], r: s[k]});
                if(s[j] === s[k] && k-j ===1 ){
                    dp[j][k] = 1
                    if(k-j+1 > max){
                        max = k-j+1;
                        m = j;
                        n = k;
                    }
                }else if(s[j] === s[k] && dp[j+1][k-1]){
                    dp[j][k] = 1
                    if(k-j+1 > max){
                        max = k-j+1;
                        m = j;
                        n = k;
                    }
                }else {
                    dp[j][k] = 0;
                }
                j++; k++
            }

        }
        i++;
    }
    // console.log(dp);
    // console.log({m, n})
    return s.substring(m, n+1);
};