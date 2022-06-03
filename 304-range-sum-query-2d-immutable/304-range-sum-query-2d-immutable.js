/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    // console.log(matrix);
    // return matrix;
    this.matrix = matrix
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    console.log({row1, col1, row2, col2})
  
    // console.log(this.matrix);
    let sum =0;
    // console.log(this.matrix);
    for(let i =row1; i<= row2; i++){
        // console.log({i})
        for(let j =col1; j<=col2; j++){
            // console.log({i,j, val:this.matrix[i][j] })
            sum += this.matrix[i][j]
        }
    }
        return sum;
    // 2,1 2,2 2,3
    // 3,1 3,2 3,3
    // 4,1 4,2 4,3
    // return 1
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */