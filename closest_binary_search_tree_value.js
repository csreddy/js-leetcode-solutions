//  Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var closestBTValue = function(root, target) {
    if(root === null) return null;

    return findClosestValueRecursive(root, target, root.val)
 // return findClosestValueIteractive(root, target);
}

var findClosestValueRecursive = function(node, target, currClosest) {
    if(node === null) return;
    
    if(node.val === target) return node.val;

    if(Math.abs(node.val - target) < currClosest){
        currClosest = node.val;
    }

    if(target < node.val) {
        findClosestValueRecursive(node.left, target, currClosest);
    } else {
        findClosestValueRecursive(node.right, target, currClosest);
    }    
    return currClosest;
}

// runtime: O(h) h - height of BST

// iterative method
var findClosestValueIteractive = function(node, target) {
    if(node == null) return null;
    let currClosest = node.val;
    while(node !== null){
        if(target < node.val){
          const diff = Math.abs(target - node.val);  
          if(diff <  currClosest) {
              currClosest = node.val;
          }
          node = node.left;
        } else if(target > node.val) {
            const diff = Math.abs(target - node.val);  
            if(diff <  currClosest) {
                currClosest = node.val;
            }
            node = node.right;
        } else {
            currClosest = node.val;
        }
    }
    return currClosest;
}


const tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(5);

console.log(closestBTValue(tree, 4));