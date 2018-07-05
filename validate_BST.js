
//  Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null) return true;

   return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

var isBST = function(node, min, max) {
    if(node === null) return true;
    if(node.val < min  || node.val > max) return false;
    
    return  (isBST(node.left, min, node.val - 1) && isBST(node.right, node.val + 1, max));
}

// runtime: O(n)

const tree = new TreeNode(2);
tree.left = new TreeNode(3);
tree.right = new TreeNode(1);
tree.right.right = new TreeNode(5);

console.log(isValidBST(tree));