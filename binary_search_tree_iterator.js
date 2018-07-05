
 // Definition for binary tree
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}


class BSTIterator {
    constructor(root) {
      this.stack = [];
      this.pushAll = function(node) {
          while (node !== null) {
           this.stack.push(node);
           node = node.left; 
        }
      };
      this.pushAll(root)  
    }
    /**
     * @this BSTIterator
     * @returns {boolean} - whether we have a next smallest number
     */
    hasNext() {
      return this.stack.length > 0;
    }
    /**
     * @this BSTIterator
     * @returns {number} - the next smallest number
     */
    next() {
      const node = this.stack.pop();
      this.pushAll(node.right);
      return node.val;
    }
  }
  

  // runtime:  average O(1) time and uses O(h) memory, where h is the height of the tree.
/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/