/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(r) {
    const ltr = [1], rtl = [1];
    for(let i=1; i<r.length; i++){
      if(r[i] > r[i-1]){
        ltr.push(ltr[ltr.length-1] +1);
      }else{
        ltr.push(1);
      }
    };
    for(let i = r.length -2; i>=0; i--){
      if(r[i]>r[i+1]){
        rtl.unshift(rtl[0]+1);
      }else{
         rtl.unshift(1);
      }
    }
  return ltr.reduce((acc,curr, i) => {
    return acc + Math.max(curr, rtl[i]);
  }, 0)
};