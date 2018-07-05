// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var mirrorTree = function (root) {
  if (root == null) return root;

  const left = mirrorTree(root.left)
  const right = mirrorTree(root.right)  

  root.left = right;
  root.right = left;

  return root
}

var mirrorTreeBFS = function(root) {
    if(!root == null) return null;
    const queue = [];
    queue.push(root);
    
    while(queue.length > 0) {
       const node = queue.shift();
       swap(node.left, node.right);
       
       if(node.left !== null) queue.push(node.left);
       if(node.right !== null) queue.push(node.right);
    }
    return root;
}


const tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(5);

console.log(mirrorTree(tree));
