// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return [];
  merge(0, lists.length - 1, lists);
};

var merge = function(beg, end, lists) {
  if (beg == end) return lists[beg];
  if (beg < end) {
    let mid = Math.floor((beg + end) / 2);
    let left = merge(beg, mid, lists);
    let right = merge(mid + 1, end, lists);

    return merge2Lists(left, right);
  }
  return null;
};

var merge2Lists = function(list1, list2) {
  if (list2 === null) return list1;
  if (list1 === null) return list2;
  if (list1.val <= list2.val) {
    list1.next = merge2Lists(list1.next, list2);
    return list1;
  } else {
    list2.next = merge2Lists(list2.next, list1);
    return list2;
  }
};

/**
 * Time complexity: O(Nlogk) where k is the number of linked lists.

We can merge two sorted linked list in O(n) time where n is the total number of nodes in two lists.
Sum up the merge process and we can get: O(n log k)
Space complexity : O(1)

We can merge two sorted linked lists in O(1) space.
 */
