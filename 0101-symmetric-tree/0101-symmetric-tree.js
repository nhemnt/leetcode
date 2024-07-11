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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return left.val === right.val
            && isMirror(left.left, right.right)
            && isMirror(right.left, left.right);
    }

    return isMirror(root.left, root.right);
};