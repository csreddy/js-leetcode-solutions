/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return height(root) !== -1;
};

var height = function(root) {
    if(root === null) return 0;

    let left = height(root.left);
    if(left === -1) return -1;
    let right = height(root.right); 
    if(right === -1) return -1;
    
    if(Math.abs(right - left) > 1) return -1;
    return Math.max(left, right) + 1;
}

// runtime: O(n)