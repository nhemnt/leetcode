/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const m = new Map();
    for(let i =0; i< s.length; i++){
     const k =`_${t[i]}`
      if(!m.has(s[i])){
        if(m.has(k) && m.get(k) !== s[i]) return false;
        m.set(s[i], t[i])
        m.set(`_${t[i]}`, s[i])
      }else if(m.get(s[i]) !== t[i]){
        return false;
      };

    }
  return true;
};