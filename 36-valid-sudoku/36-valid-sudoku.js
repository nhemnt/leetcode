/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // console.log(board)
  for(let i =0; i<9; i++){
    const r = new Set();
    const c = new Set();
    const b = new Set();
  
    for(let j =0; j<9; j++){
      const row = board[i][j];
      const col = board[j][i];
      const box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
    
      if(row != "."){
        if(r.has(row)) return false;
        r.add(row);
      }
      
      if(col != "."){
        if(c.has(col)) return false;
        c.add(col);
      }
      
      if(box != "."){
        if(b.has(box)) return false
        b.add(box);
      } 
    }
  }
  

  return true
};