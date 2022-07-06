/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
  if(n === 1 || n === 0) return n;
  let m = {
    0: 0,
    1: 1,
  };
  for(let i=2; i<n; i++){
    const l = m[i-1] || 0
    const r = m[i-2] || 0;
    m[i] = l+r;
  }
  
  return m[n-1] + m[n-2];
};