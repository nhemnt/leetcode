/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {};
    for(let i =0; i< s.length; i++){
        if(map[s[i]]){
            map[s[i]] += 1
        }else{
            map[s[i]] = 1
        }
    }

    for(let i =0; i< t.length; i++){
         if(map[t[i]]){
            map[t[i]] -= 1
            if(map[t[i]] === 0){
                delete map[t[i]];
            }
         }else{
            return false
         }
    }
    
    return Object.keys(map).length === 0
};