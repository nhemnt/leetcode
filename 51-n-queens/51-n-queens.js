/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const matrix = Array(n).fill().map(_ => Array(n).fill(".") );
    const col = {};
    const rl = {};
    const lr = {};
    const update = (i,j) => {
        if(col[j] || rl[j-i] || lr[i+j]) return;
        
        matrix[i][j] = 'Q';
        col[j] = true;
        rl[j-i] = true;
        lr[i+j] = true;
        
        if(i === n-1){
            result.push(matrix.map(ij => ij.join("")))
        }else{
             for(let k =0; k<n; k++){
                 update(i+1, k);
             }
        }
        // console.log({i, j ,matrix});
        matrix[i][j] = '.';
        col[j] = false;
        rl[j-i] = false;
        lr[i+j] = false;
    }
    
    for(let j=0; j<n; j++){
        update(0, j);
    }

    return result;
};