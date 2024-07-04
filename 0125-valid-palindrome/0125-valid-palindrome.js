/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // s = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // let i=0, j = s.length-1;
    // while(i<j){
    //     if(s[i] !== s[j]){
    //         return false
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
    let str = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase()
        if (char.charCodeAt() > 96 && char.charCodeAt() < 123 || char.charCodeAt() > 47 && char.charCodeAt() < 58) {
            str += char
        }
    }
    let i = 0; j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++; j--;
    }
    return true
};