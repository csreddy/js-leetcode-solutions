
//  Definition for singly-linked list with a random pointer.
  function RandomListNode(label) {
      this.label = label;
      this.next = this.random = null;
  }


/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head == null) return null;
    const map = new Map();
    // store all nodes in map
    const node = head;
    while(node !== null) {
        map.set(node, new RandomListNode(node.label));
        node = node.next;
    }

    // assign next and random pointers
    node = head; // reset to head
    while (node !== null) {
        const n = map.get(node);
        n.next = map.get(n.next);
        n.random = map.get(n.random);
        node = node.next;    
    }
    return map.get(head)
};

// runtime: O(n)