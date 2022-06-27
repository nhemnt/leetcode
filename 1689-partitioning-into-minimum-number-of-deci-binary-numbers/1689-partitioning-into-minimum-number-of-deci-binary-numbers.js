/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return n.split("").reduce((a, c) => {
      if(c > a){
        a = c
      }
      return a;
    }, 0)
};