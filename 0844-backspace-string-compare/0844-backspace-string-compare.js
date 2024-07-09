/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const a = [];
    const b = [];
    for(let i =0; i< s.length; i++){
        if(s[i] === "#"){
            a.pop()
        }else{
            a.push(s[i])
        }
    }
     for(let i =0; i< t.length; i++){
        if(t[i] === "#"){
            b.pop()
        }else{
            b.push(t[i])
        }
    }

    return a.join("") === b.join("")
};