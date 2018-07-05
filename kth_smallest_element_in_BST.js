
 // Definition for a binary tree node.
 function TreeNode(val) {
      this.val = val;
     this.left = this.right = null;
 }
 
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = [];
    // push left nodes into stack
    while(root !== null){
        stack.push(root);
        root = root.left;
    }

    while(k !== 0){
       const node = stack.pop();
       k--;
       if(k === 0) return node.val;
       
       // process right sub tree
       let right = node.right;
       while(right !== null){
           stack.push(right);
           right = right.left;
       }
    }
    return -1;
};
// runtime: O(n) // n is number of nodes

