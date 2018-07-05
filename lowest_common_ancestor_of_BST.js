
//  Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return recursive(root, p, q);
};

var recursive = function(root, p, q) {
    if(root.val > p.val && root.val > q.val) {
        return recursive(root.left, p, q);
    } else if(root.val < p.val && root.val < q.val) {
        return recursive(root.right, p, q);
    } else {
        return root;
    }
}

var iterative = function(root, p, q) {
    while (true) {
        if(root.val > q.val && root.val > q.val) {
            root = root.left;
        } else if(root.val < q.val && root.val < q.val){
            root = root.right;
        } else {
            return root;
        }
    }
}

// alternative solution
var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q){
        return root
    }
    
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    
    if(left && right) return root;
       
    return (left !== null) ? left: right;
};

// runtime: O(h)   h - height of tree