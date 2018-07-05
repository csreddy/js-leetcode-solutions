//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let result = [];
  if (root === null) return result
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelNum = queue.length;
    let set = [];

    for (let i = 0; i < levelNum; i++) {
      let curr = queue.shift();
      set.push(curr.val) 

      if (curr.left !== null) queue.push(curr.left)
      if (curr.right !== null) queue.push(curr.right)
    }

    result.push(set); // push to front
  }
  return result.reverse();
};

// alternative solution using recursion
var levelOrderBottom = function(root) {
    var res = [];
    
    function deepFirst (root, level) {
        if (!root) return;
        if (res[level]) {
            res[level].push(root.val);
        }
        else {
            res[level] = [root.val];
        }
        deepFirst(root.left, level + 1);
        deepFirst(root.right, level + 1);
    }
    
    deepFirst(root, 0)
    
    return res.reverse();
};


const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.right.left.right = new TreeNode(8);
tree.right.right.right = new TreeNode(9);

console.log(levelOrderBottom(tree));
