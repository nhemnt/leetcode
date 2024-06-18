/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteLetterMap = {}
    const magazineLetterMap = {}
    for(let i = 0; i< magazine.length; i++){
        if(magazineLetterMap[magazine[i]]){
            magazineLetterMap[magazine[i]]++
        }else{
            magazineLetterMap[magazine[i]] = 1
        }
    }
    for(let i = 0; i< ransomNote.length; i++){
        if(ransomNoteLetterMap[ransomNote[i]]){
            ransomNoteLetterMap[ransomNote[i]]++
        }else{
            ransomNoteLetterMap[ransomNote[i]] = 1
        }
    }

    for(key in ransomNoteLetterMap){
        if(ransomNoteLetterMap[key] > (magazineLetterMap[key] || 0) ){
            return false;
        }
    }

    return true;
    
};