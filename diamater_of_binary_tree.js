/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;

  function maxDepth(root) {
    if (root == null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }

  maxDepth(root);
  return max;

};

// runtime: O(n)

// alternative implementation
var diameterOfBinaryTree = function(root) {
    
    function diameter(root, height) {
        if(root === null) return 0;
        
        const leftDia = diameter(root.left, height)
        const rightDia = diameter(root.right, height)
        
        height = Math.max(leftDia, rightDia) + 1;
        
        return Math.max(leftDia, rightDia + 1, Math.max(leftDia, rightDia))   
    }
    
    return diameter(root, 0)
    
    
};
