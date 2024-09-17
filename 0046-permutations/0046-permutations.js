/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (arr) {
    const result = [];

    function backtrack(currentNums, currentPerms) {
        if (currentPerms.length === arr.length) {
            result.push([...currentPerms]);
            return;
        }

        for (let i = 0; i < currentNums.length; i++) { 
            currentPerms.push(currentNums[i]);
            const remainingNums = currentNums.slice(0,i).concat(currentNums.slice(i+1));
            backtrack(remainingNums, currentPerms);
            currentPerms.pop();
        }
    }

    backtrack(arr, []);
    return result;

};