/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    const result = [];

    const backtrack = (i, solution ) => {
        if(solution.length >= k){
            result.push(solution);
            return [];
        };
        if(i > n){
            return []
        }
        backtrack(i+1, [...solution])
        backtrack(i+1, [...solution, i])

    }

    backtrack(1, []);
    return result;
};