/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const result = [[]];
    let counter = 0;
    for (let i = 0; i < words.length; i++) {
        if (counter + words[i].length <= maxWidth) {
            result[result.length - 1].push(words[i]);
            counter = counter + words[i].length + 1
        } else {
            counter = 0;
            result.push([]);
            i--;
        }
    }
    // console.log(result)
    return result.map((arr, index) => {
        const arrLength = arr.join("").length;
        const diff = maxWidth - arrLength;
        const space = Math.floor(diff / ((arr.length - 1) || 1));
        let extraSpaces = diff % ((arr.length - 1) || 1);
        let str = ""
        const spacesStr = [...Array(space)].reduce((acc, curr) => acc + " ", "");
        if (index === result.length - 1) {
            str = arr.join(" ");
        } else {
            for (let i = 0; i < arr.length; i++) {
                str += arr[i];
                if (extraSpaces) {
                    str += " ";
                    extraSpaces--;

                }
                if (i !== arr.length - 1) {
                    str += spacesStr
                }

            }
        }

        // console.log({ length: str.length, str, })
        for (let i = str.length; i < maxWidth; i++) {
            str += " ";
        }
        return str
    })

};