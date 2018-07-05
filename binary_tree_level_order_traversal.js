//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return root;
  let queue = [];
  let result = [];
  let temp = []
  let currLevel = 1,
    nextLevel = 0;

  queue.push(root)
  while (queue.length > 0) {
    const node = queue.shift();
    temp.push(node.val);
    currLevel--;

    if (node.left) {
      queue.push(node.left);
      nextLevel++;
    }

    if (node.right) {
      queue.push(node.right);
      nextLevel++;
    }

    if (currLevel === 0) {
      result.push(temp);
      temp = [];
      currLevel = nextLevel;
      nextLevel = 0;
    }

  }
  return result;
}

// alternative implementation
var levelOrder2 = function(root) {
    if(root == null) return [];
    let queue = [];
    let result = [];

    queue.push(root);
    while(queue.length > 0){
        let temp = [];
        let size = queue.length;
        while (size > 0) {
            const node = queue.shift();
            temp.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            size--;
        }
        result.push(temp);
    }
    return result;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.right.left.right = new TreeNode(8);
tree.right.right.right = new TreeNode(9);

console.log(levelOrder(tree));