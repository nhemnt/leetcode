/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows < 2) return s; 
    if(numRows === 2){
        let lOutput = ''; rOutput = ''
        for(let i=0; i<s.length; i++){
            if(i%2 === 0){
                lOutput +=s[i];
            }else {
                rOutput += s[i]
            }
        }
        return lOutput + rOutput;
    }
    const result =  Array(numRows).fill([]);
    for(let i=0; i<result.length; i++){
        result[i] = Array(s.length).fill(0);
    }
  
    let x = -1; y=0; asc = true;
    for(let i=0; i<s.length;i++){
        if(asc){
            x++;
        }
        console.log({x,y,s: s[i]});
        result[x][y] = s[i];
        if(x === numRows-1 && asc){
            asc = false;
            if(x !== 0) x--;
            y++
        }else if(!asc && x == 1){
            x = -1;
            y++;
            asc = true;
        }else if(!asc){
            if(x !== 0) x--;
            y++;
        }
    }
    
    let output = ''
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result[i].length; j++){
            if(result[i][j]) output += result[i][j];
        }
    }

    return output;

}
