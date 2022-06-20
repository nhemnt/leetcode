/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const m = new Map();
  let r = ''
  words.sort((x,y) => y.length - x.length)
  for(let word of words){
    if(!m.has(word)){
      // console.log({word, m});
      let suffix = ''
      for(let i =word.length-1; i>=0; i--){
        suffix = word[i] + suffix;
        m.set(suffix, 1);
      }
      r += `${word}#`
    }
  }
  return r.length;
};