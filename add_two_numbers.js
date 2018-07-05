
//  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Traverse both lists. One by one pick nodes of both lists and add the values. If sum is more than 10 then make carry as 1 and reduce sum. If one list has more elements than the other then consider remaining values of this list as 0.
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead =  new ListNode(0);
  let carry = 0;
  let curr = dummyHead;
  while (l1 !== null || l2 !== null) {
    const a =  l1 ? l1.val : 0;
    const b =  l2 ? l2.val : 0; 
    const sum  = carry + a +b;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(Math.floor(sum % 10))
    if(l1.next) l1 = l1.next;
    if(l2.next) l2 = l2.next;
  }   

  if(carry  > 0) {
      curr.next = new ListNode(carry);
  }

  return dummyHead.next;

}

// runtime: O(n)