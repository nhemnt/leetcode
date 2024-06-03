/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i=0; i< s.length; i++){
        if(s[i] === "}"){
            if(stack.pop() !== "{"){
                return false
            }
        }else if(s[i] === "]"){
            if(stack.pop() !== "["){
                return false
            }
        }else if(s[i] === ")"){
            if(stack.pop() !== "("){
                return false
            }
        }else{
            stack.push(s[i]);
        }
    }

    if(stack.length) return false;
    return true;
};