// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  return serializer(root, []);
};

var serializer = function(root, arr) {
  if (root == null) {
    arr.push('#');
    return;
  }
  arr.push(root.val);
  serializer(root.left, arr);
  serializer(root.right, arr);
  return arr.join(',');
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(!data) return null;
  
  let idx = 0;
  const arr = data.split(',');

  var deserializer = function(arr) {
    if (!arr || arr.length === 0) return null;
    if (idx > arr.length || arr[idx] === '#') {
      return null;
    }

    let node = new TreeNode(parseInt(arr[idx]));
    idx++;
    node.left = deserializer(arr);
    idx++;
    node.right = deserializer(arr);
    return node;
  };
  return deserializer(arr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(5);

console.log(serialize(deserialize('2,1,#,#,3,#,5,#,#')));
console.log(serialize(tree));
//console.log(deserialize(serialize(tree)));
// console.log(deserialize('2,1,#,#,3,#,5,#,#'));
