/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(t == null)  return true;
    if(s == null)  return false;
     
     if(equal(s, t)) return true;
     
     return isSubtree(s.left, t) || isSubtree(s.right, t);
 };
 
 
 var equal = function(x, y) {
      if(x == null || y == null) return false;
     
      if(x == null && y == null) return true;
     
     return x.val == y.val && equal(x.left, y.left) && equal(x.right, y.right)
 }

 // runtime: O(m*n)