/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(p) {
    p.sort((x,y) => {
      if(x[0] === y[0]){
        return x[1] - y[1];
      }
      return y[0] - x[0]
    });
  const result = new Array(p.length);
  for(let i = 0; i<p.length; i++){
    const [h,k] = p[i];
    if(result[k] === undefined){
      result[k] = p[i];
    }else{
      result.splice(k,0,p[i]);
    }
  }

  return result.filter(x => x !== undefined);
};