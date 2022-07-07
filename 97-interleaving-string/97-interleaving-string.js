/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

var isInterleave = function(s1, s2, s3) {
  const l1 = s1.length, l2 = s2.length, l3= s3.length;
  if(l3 !== l2 + l1) return false;
  let m = new Map();
  const check = (p1,p2,p3) => {
    if(l1 === p1) return s2.slice(p2) === s3.slice(p3);
    if(l2 === p2) return s1.slice(p1) === s3.slice(p3);
    const k = `${p1}-${p2}`
    if(m.has(k)) {
      return m.get(k);
    }
    let res = false;
    if(s1[p1] === s3[p3] && s2[p2] === s3[p3]) res = check(p1+1, p2, p3+1) || check(p1, p2+1, p3+1);
    else if(s1[p1] === s3[p3]) res = check(p1+1, p2, p3+1);
    else if(s2[p2] === s3[p3]) res = check(p1, p2+1, p3+1);
    m.set(k, res);
    return res;
  }
  

  return check(0,0,0);
   
};