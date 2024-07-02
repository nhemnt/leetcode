/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const mapping = {
        "I": {
            "i": 0,
            "val": 1
        },
        "V": {
            "i": 1,
            "val": 5
        },
        "X": {
            "i": 2,
            "val": 10
        },
        "L": {
            "i": 3,
            "val": 50
        },
        "C": {
            "i": 4,
            "val": 100
        },
        "D": {
            "i": 5,
            "val": 500
        },
        "M": {
            "i": 6,
            "val": 1000
        }
    }
    let result = mapping[s[s.length - 1]].val;
    // console.log({ result });
    for (let i = s.length - 2; i >= 0; i--) {
        // console.log({ previ: mapping[s[i + 1]].i, curri: mapping[s[i + 1]].i, prev: mapping[s[i + 1]].val, curr: mapping[s[i]].i });
        if (mapping[s[i + 1]].i > mapping[s[i]].i) {
            result -= mapping[s[i]].val
        } else {
            result += mapping[s[i]].val
        }

    }

    return result;
};