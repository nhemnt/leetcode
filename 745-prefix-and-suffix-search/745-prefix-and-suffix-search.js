/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  this.map = new Map();
  
  for (let i = 0; i < words.length; i++) {
    let prefix = '';
    for(let j=0; j<=words[i].length;j++){
      let suffix = '';
      for(let k=0; k<=words[i].length; k++){
        suffix = words[i].slice(k);
        this.map.set(`${prefix}#${suffix}`, i);
      }
      prefix += words[i][j];
    }
  }
  // console.log(this.map);
    
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */


WordFilter.prototype.f = function(prefix, suffix) {
//   let max = ''
//   const sR = new RegExp(`^${prefix}`);
//   const eR = new RegExp(`${suffix}$`)
  
//   for(let i = 0; i< this.words.length; i++){
//     if(sR.test(this.words[i]) && eR.test(this.words[i])){
//       if(!max){
//         max = i
//       }else if(this.words[i].length >= this.words[max].length){
//         max = i
//       }
//     }
//   }
//   // console.log({suffix, prefix});
//   return max === "" ? -1 : max;
  const v = `${prefix}#${suffix}`
  return this.map.has(v) ? this.map.get(v) : -1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */