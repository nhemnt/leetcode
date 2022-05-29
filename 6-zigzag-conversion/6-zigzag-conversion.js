/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s; 
    
    let down = false, rowI = 0;
    const outputArr = Array(numRows).fill('');
    for(let i = 0; i<s.length;i++){
        if(rowI === 0) down = true;
        if(rowI === numRows-1) down = false;
        
        outputArr[rowI] += s[i];
        if(down){
            rowI++
        }else{
            rowI--
        }
        
    }
    return outputArr.join('')

}
