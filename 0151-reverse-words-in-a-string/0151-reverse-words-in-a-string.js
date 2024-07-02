/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // return s.trim().split(" ").filter(x => x ).reverse().join(" ");
    const result = [];
    let str = "";

    for (let i = 0; i < s.length; i++) {
        if (str) {
            if (s[i] === " ") {
                result.push(str)
                str = ""
            } else {
                str += s[i];
            }

        } else if (s[i] !== " ") {
            str = s[i];
        }

        if (i === s.length - 1 && str) {
            result.push(str)
        }

    }
    let i = 0; j = result.length - 1;
    while (i < j) {
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
        i++; j--;
    }
    return result.join(" ");
};