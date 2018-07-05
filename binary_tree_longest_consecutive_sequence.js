/**
 * Given a Binary Tree find the length of the longest path which comprises of nodes with consecutive values in increasing order. Every node is considered as a path of length 1.
 */

var longestSeq = function(root) {
  if (root == null) return null;

  const nodes = [];
  const sizes = [];

  nodes.push(root);
  sizes.push(1);
  let max = 1;

  while (nodes.length !== 0) {
    const node = nodes.pop();
    let size = sizes.pop();

    if (node.left !== null) {
      let leftSize = size;
      if (node.val === node.left.val - 1) {
        leftSize++;
        max = Math.max(leftSize, max);
      } else {
        leftSize = 1;
      }
      nodes.push(node.left);
      sizes.push(leftSize);
    }

    if (node.right !== null) {
      let rightSize = size;
      if (node.val === node.right.val - 1) {
        rightSize++;
        max = Math.max(rightSize, max);
      } else {
        rightSize = 1;
      }
      nodes.push(node.right);
      sizes.push(rightSize);
    }
  }
  return max;
};
