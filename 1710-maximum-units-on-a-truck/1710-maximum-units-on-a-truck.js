/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(b, t) {
    b.sort((x,y) => y[1] - x[1] )
    var s = 0;
    for(let i =0; i< b.length; i++){
      const [n, u] = b[i]
      if(t >= n){
        t -= n;
        s += n*u;
      }else{
        s += t*u;
        t = 0;
        break 
      }
    }
  
  return s;
};