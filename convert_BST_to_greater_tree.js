/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var convertBST = function(root) {
    function toGreaterBST(root) {
        if(root == null) return;
    
        toGreaterBST(root.right);
        sum += root.val;
        root.val = sum;
        toGreaterBST(root.left);
        
        return root;
    };
    let sum = 0;
    if(root == null) return null;
    return toGreaterBST(root)
};


//runtime: O(n)
