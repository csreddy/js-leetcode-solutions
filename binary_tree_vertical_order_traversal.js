/** 
 * The idea is to traverse the tree once and get the minimum and maximum horizontal distance with respect to root. For the tree shown above, minimum distance is -2 (for node with value 4) and maximum distance is 3 (For node with value 9).
Once we have maximum and minimum distances from root, we iterate for each vertical line at distance minimum to maximum from root, and for each vertical line traverse the tree and print the nodes which lie on that vertical line.
 * 
*/
//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var verticalOrderTraversal = function(root) {
  const nodes = [];
  const dist = {min:0, max: 0};

  const findMinMaxHorizontalDistance = function(node, min, max, hd) {
    if (node === null) return null;
  
    if (hd < min) dist.min = hd;
    if (hd > max) dist.max = hd;
  
    findMinMaxHorizontalDistance(node.left, min, max, hd - 1);
    findMinMaxHorizontalDistance(node.right, min, max, hd + 1);
  };  

  const traverse = function(node, line, hd) {
    if (node == null) return;
    if (hd === line) nodes.push(node.val);
    traverse(node.left, line, hd - 1);
    traverse(node.right, line, hd + 1);
  };
  

  findMinMaxHorizontalDistance(root, 0, 0, 0);
  console.log(dist);

  for (let i = dist.min; i <= dist.max; i++) {
    traverse(root, i, 0);
  }
  return nodes;
};


// runtime: O(w*n), w=width, n=nodes, worst case O(n^2)

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);
tree.right.left.right = new TreeNode(8);
tree.right.right.right = new TreeNode(9);

console.log(verticalOrderTraversal(tree));

