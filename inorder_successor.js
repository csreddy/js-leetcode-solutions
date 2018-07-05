
var inorderSuccessor = function (root, node) {
    if(root === null) return null;

    if(node.right !== null) {
        return findMin(node.right)
    }

    let successor = null;
    while (root !== null) {
        if(node.val < root.val) {
            successor = root;
            root = root.left
        } else if(node.val > root.val) {
            root = root.right;
        } else {
            break;
        }
    }

    return successor;
}

var findMin = function (node) {
    let curr = node
    while (curr.left !== null) {
        curr = curr.left;
    }

    return curr.val;
}