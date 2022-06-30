/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(n) {
  // n2
  let min = Infinity;
  for(let i =0; i<n.length; i++){
    let sum = 0
    for(let j =0; j<n.length; j++){
      sum += Math.abs(n[i] - n[j]);
    }
    min = Math.min(min, sum)
  }
  
  return min
};