/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let newArr = []
    for(let i=0;i<matrix[0].length; i++){
        const col = []
        for(let j=0; j<matrix.length; j++){
            col.push(matrix[j][i])
        }
        newArr.push(col);
    }
    // console.log(newArr);
    return newArr;
};