// alternative implementation
var findNextNodeInSameLevel = function(root, val) {
    if(root == null) return [];
    let queue = [];
    let result = [];

    queue.push(root);
    while(queue.length > 0){
        let temp = [];
        let size = queue.length;
        while (size > 0) {
            const node = queue.shift();
            if(node.val == val) {
                if(queue.length > 0) return queue.shift()
                return nulll
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            size--;
        }
    }
    return null;
}