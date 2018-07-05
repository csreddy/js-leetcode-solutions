//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if(headA == null && headB === null) return null;

    let l1 = l2 = 0;
    let head1 = headA;
    let head2 = headB;
    
    //count lengths of both lists
    while (head1 !== null) {
        l1++;
        head1 = head1.next;
    }

    while (head2 !== null) {
        l2++;
        head2 = head2.next;
    }

    // count the diff b/w lengths
    let diff =  Math.abs(l1 - l2);

    // if headA is longer then move it by diff times
    if(l1 > l2) {
        while (diff > 0) {
            headA = headA.next
            diff--;
        }
    }
    // if headB is longer then move it by diff times
    if(l2 > l1) {
        while (diff > 0) {
            headB = headB.next
            diff--;
        } 
    }

    // while traversing both lists together check if the val matches on both lists, if true then return the matched node
    while (headA !== null && headB !== null) {
        if(headA.val === headB.val) return headA;
        headA = headA.next;
        headB = headB.next;
    }

    // if there is no intersection return null
    return null;
}


// runtime: O(n)