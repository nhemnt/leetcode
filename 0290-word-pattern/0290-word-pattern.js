/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false
    const map = {};
    const sMap = {}

    const symbol = "__"
    for (let i = 0; i < pattern.length; i++) {
        const a = symbol + pattern[i];
        const b = symbol + words[i]
        if (map[a] || sMap[b]) {
            if (map[a] !== b || sMap[b] !== a) {
                return false;
            }
        } else {
            map[a] = b;
            sMap[b] = a
        }
    }

    return true;
};