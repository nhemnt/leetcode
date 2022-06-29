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
  var r = []
  p.forEach(item => {
    r.splice(item[1], 0, item);
  })

  return r
};