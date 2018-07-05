/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// iterative solution (level order)
var rightSideView = function (root) {
  if (root === null) return [];

  let queue = [];
  let result = [];
  queue.push(root);
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i == 0) result.push(node.val)

      if (node.right !== null) {
        queue.push(node.right)
      }

      if (node.left !== null) {
        queue.push(node.left)
      }
    }
  }
  return result;
};


// recursive solution
var rightSideView = function (root) {
  if (root === null) return [];

  function rightView(node, result, level) {
    if (node === null) return;

    if (level === result.length) {
      result.push(node.val);
    }
    rightView(node.right, result, level + 1);
    rightView(node.left, result, level + 1);
  }
  let result = []
  rightView(root, result, 0)
  return result;

}
