/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
  let result = 0
    const dfs = (node) => {
      if(!node) return 0;
      let val = dfs(node.left) + dfs(node.right)
      if (val === 0) return 3
      if (val < 3) return 0
      result++
      return 1
    }
  return dfs(root) > 2 ? result +1: result;
};