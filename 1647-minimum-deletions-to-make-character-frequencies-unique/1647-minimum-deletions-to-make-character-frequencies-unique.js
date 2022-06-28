/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
 const m = new Map();
 const u = new Set();
 let c = 0;

  for(const ch of s){
    if(m.has(ch)){
      m.set(ch, m.get(ch)+1);
    }else{
      m.set(ch, 1);
    }
  }
  // console.log({m});
  for(let [key, value] of m.entries() ){
    while(u.has(value) && value>0){
      value--
      c++;
    }
    
    u.add(value);
  }
  return c;
};