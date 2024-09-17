/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
   
   const result = [];

    function backtrack(start, currentCombination, remainingTarget){
        if(remainingTarget === 0){
            result.push([...currentCombination]);
        }

        for(let i =start; i<candidates.length; i++){
            const currentNum  = candidates[i];
            if(currentNum > remainingTarget) continue;

            currentCombination.push(currentNum);
            backtrack(i,currentCombination,  remainingTarget - currentNum);
            currentCombination.pop()
        }

    }

    backtrack(0, [], target);
    return result;

};