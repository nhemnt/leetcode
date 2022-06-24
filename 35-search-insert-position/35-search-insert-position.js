/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(n, target) {
    const bst = (n, l, r) => {
      // console.log({l,r})
        if(l > r) return l;
        const mid = Math.floor((r+l)/2);
        if(n[mid] === target) return mid;
        if(target > n[mid]) return bst(n, mid+1, r);
        if(target < n[mid]) return bst(n, l, mid-1);
    }
    return bst(n,0, n.length-1);
};