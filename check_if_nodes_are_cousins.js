//  Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

// definition of special purpose node  
class Node {
  constructor(val, parent, level) {
    this.val = val;
    this.parent = parent;
    this.level = level;
  }
}

var areCousins = function (root, nodeA, nodeB) {
  if (root === null) return true;
  let level = 1;
  let parent = null;

  // perform inorder traversal and update nodeA and nodeB with parent and level
  inorder(root, parent, level, new Node(nodeA.val, parent, level), new Node(nodeB.val, parent, level))

  if (nodeA.parent !== nodeB.parent && nodeA.level === nodeB.level) {
    return true;
  }
  return false;
}

var inorder = function (node, parent, level, nodeA, nodeB) {
  if (node === null) return;

  // traverse left subtree
  inorder(node.left, node, level + 1, nodeA, nodeB);

  // update nodeA
  if (node.val === nodeA.val) {
    nodeA.level = level;
    nodeA.parent = parent;
  }

  // update nodeB
  if (node.val === nodeB.val) {
    nodeB.level = level;
    nodeB.parent = parent;
  }

  // traverse right subtree
  inorder(node.right, node, level + 1, nodeA, nodeB);

}
