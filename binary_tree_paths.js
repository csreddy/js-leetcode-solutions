//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = [];
  traverse(root, [], result);
  return result;
};

var traverse = function(node, arr, result) {
  if (node == null) return;
  arr.push(node.val);

  if (node.left === null && node.right === null) {  
    result.push([...arr]);
  } else {
    traverse(node.left, arr, result);   
    traverse(node.right, arr, result);
  }
  arr.pop();
};

// runtime: O(n)

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(5);

console.log(binaryTreePaths(tree));
