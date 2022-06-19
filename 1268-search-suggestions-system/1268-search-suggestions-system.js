/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  const m = new Map();
  products.sort();
  for(let i =0; i<products.length; i++){
    let prefix = '';
    for(let j=0; j<products[i].length; j++){
      prefix +=  products[i][j];
      if(m.has(prefix)){
        const arr = [...m.get(prefix)];
        if(arr.length < 3){
          arr.push(products[i]);
          m.set(prefix, arr);          
        }
      }else {
        m.set(prefix, [products[i]]);
      }
    }
  }
  const result = []
  let prefix = ''
  for(let i =0; i<searchWord.length; i++){
    prefix += searchWord[i];
    if(m.has(prefix)){
      result.push(m.get(prefix));
    }else{
      result.push([])
    }
  }
  return result;
};