/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  words.sort((x,y) => x.length - y.length );
  const map = {};
  let max = 0;
  for(let word of words){
    let l =0
    for(let i= 0; i< word.length; i++){
      const sub = word.substr(0, i) + word.substr(i+1, word.length);
      // console.log({sub, word, i})
      l = Math.max(l, (map[sub] || 0) +1 );      
    }
    map[word] = l;
    max = Math.max(max, l);
  }
  
  return max;
};

module.exports = longestStrChain;