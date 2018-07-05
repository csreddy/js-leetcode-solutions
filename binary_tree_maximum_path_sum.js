//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;
    
function traverse(root) {
    if(root === null) return 0;
    const left = Math.max(traverse(root.left), 0);
    const right = Math.max(traverse(root.right), 0);
    // maxValue is the value which recording whether this current root is the final root, so we use left + right + node.val. But to the upper layer(after return statement), we cannot choose both left and right brunches, so we need to select the larger one, so we use max(left, right) + node.val to prune the lower brunch.
    max = Math.max(max, left + right + root.val);
    return Math.max(left, right) + root.val;
}
    
    traverse(root);
    return max;
};
