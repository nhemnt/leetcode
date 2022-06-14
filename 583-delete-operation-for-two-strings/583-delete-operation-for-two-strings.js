/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(w1, w2) {
  let m = w1.length, n = w2.length;
  if(m < n) [w1, w2, m ,n] = [w2, w1, n, m];
  w1 = w1.split(""); w2 = w2.split("");
  let dpCurr = new Array(n+1).fill(0);
  let dpLast = new Array(n+1).fill(0);
  
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        dpCurr[j+1] = w1[i] === w2[j] 
          ? dpLast[j] +1 
          : Math.max(dpCurr[j], dpLast[j+1]);
      }
    [dpCurr, dpLast] = [dpLast, dpCurr];
    }
// console.log({dpCurr,dpLast});
return m+n - dpLast[n] -dpLast[n];
  
};