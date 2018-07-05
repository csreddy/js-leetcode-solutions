/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null)  return false
    
    let slowPtr = head;
    let fastPtr = head;
    
    while(fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if(slowPtr === fastPtr) return true;
    }
    return false;
    
};

// runtime: O(n)