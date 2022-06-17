/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let o = {
      "{" : "}",
      "(" : ")",
      "[" : "]"
    }
    let a =[];
  let isValid = true;
  for(let i= 0; i< s.length; i++){
    if(o[s[i]] !== undefined){
      a.push(s[i]);
    }else{
      if(o[a.pop()] !== s[i]){
        isValid = false;
        break;
      }
    }
  }
  
  return a.length === 0 ? isValid : false;
};