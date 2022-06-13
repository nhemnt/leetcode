/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const table = []
  for(let i =0 ; i< triangle.length; i++){
    table.push(new Array(triangle[i].length).fill(0))
  }
  table[0][0] = triangle[0][0];
  for(let i=1; i<triangle.length; i++){
    for(let j=0; j<table[i].length; j++){
      const prev = table[i-1]
      if(j === 0){
        table[i][j] = prev[0] + triangle[i][j];
      }else if(j === table[i].length-1){
         table[i][j] = prev[prev.length-1] + triangle[i][j];
      }else{
        table[i][j] = Math.min(prev[j-1], prev[j]) + triangle[i][j];
      }
    }
    // console.log(table);
  }
  // console.log({t: table[table.length-1]})
  return Math.min.apply(Math, table[table.length-1]);
};