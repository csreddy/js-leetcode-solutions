//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var boundaryOfBinaryTree = function (root) {
  if (root === null) return [];
  return [
    root.val,
    ...printLeftBoundary(root.left),
    ...printLeaves(root.left),
    ...printLeaves(root.right),
    ...printRightBoundary(root.right)
  ]

};

var printLeftBoundary = function (node, res = []) {
    if (node === null) return res;
    if (node.left === null && node.right === null) return res;
  
    res.push(node.val);
  
    if(node.left === null) {
      printLeftBoundary(node.right, res);
    } else {
      printLeftBoundary(node.left, res);
    }
  
    return res;
  }
  
  var printRightBoundary = function (node, res = []) {
    if (node === null) return res;
    if (node.left === null && node.right === null) return res;
  
   
  
    if(node.right === null) {
      printRightBoundary(node.left, res);
    } else {
      printRightBoundary(node.right, res);
    }
       res.push(node.val);
  
    return res;
  }
  
  var printLeaves = function (node, res = []) {
    if (node === null) return res;
  
    if (node.left === null && node.right === null) {
      res.push(node.val);
    }
  
    printLeaves(node.left, res);
    printLeaves(node.right, res);
    return res;
  }


// runtime: O(n)

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.right.left.right = new TreeNode(8);
tree.right.right.right = new TreeNode(9);


console.log(boundaryOfBinaryTree(tree));
