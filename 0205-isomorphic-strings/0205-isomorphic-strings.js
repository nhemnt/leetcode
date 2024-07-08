/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {}
    const tMap = {};
    for(let i =0; i< s.length; i++){
        if(map[s[i]] || tMap[t[i]]){
            if(map[s[i]] !== t[i] || tMap[t[i]] !== s[i]){
                return false;
            }
        }else{
            map[s[i]] = t[i]
            tMap[t[i]] = s[i];
        }
    }
    return true;
};