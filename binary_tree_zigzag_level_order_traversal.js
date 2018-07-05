/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  if (root === null) return result
  let queue = [];
  queue.push(root);
  let level = 1;

  while (queue.length > 0) {
    let levelNum = queue.length;
    let set = [];
  
    for (let i = 0; i < levelNum; i++) {
      let curr = queue.shift();
      if (level % 2 !== 0) {
        set.push(curr.val) // push to end
      } else {
        set.unshift(curr.val) // push to front
      }

      if (curr.left !== null) queue.push(curr.left)
      if (curr.right !== null) queue.push(curr.right)
    }
  
    result.push(set);
    level++;
  }
  return result;
};
