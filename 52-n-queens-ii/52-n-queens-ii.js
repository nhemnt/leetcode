/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result = 0;
    const col = {};
    const lr = {};
    const rl = {};
    
    const update = (i,j) => {
        if(col[j] || rl[j-i] || lr[i+j]) return;

        col[j] = true;
        rl[j-i] = true;
        lr[i+j] = true;
        
        if(i === n-1){
            result++;
        }else{
            for(let k=0; k< n; k++){
                update(i+1, k);
            }
        }
        col[j] = false;
        rl[j-i] = false;
        lr[i+j] = false;
        
    }
    for(let j=0;j<n;j++){
        update(0,j);
    }
    
    return result;
    
};