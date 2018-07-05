/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 * 
 * Calculate the length of the linked list
Figure out how many nodes should be in each chunk (length / k)
Figure out how much excess there is if length is not wholly divisible by k (length % k)
For each chunk:
    Set the head to the current list node,
    Walk until we find the end of the chunk, first n chunks get 1 additional node if the remainder is > 0
    Clear the next pointer of the tail of the chunk
 */
var splitListToParts = function(root, k) {
     // get length
     let length = 0;
     let list = root;
     let result = new Array(k).fill(null);
     while(list !== null){
        length++;
        list = list.next;
     }
     
     let parts = parseInt(length/k);
     let rem = length % k;

     let curr = root;
     for(let i=0; i<k && curr !== null; i++){
        result[i] = curr;

        let tail = curr;
        // Calculate the size of *this* chunk, which is the default chunk size
        // +1 if there is still remainder to be distrubted 
        const size = parts + (rem > 0 ? 1: 0)
        rem--;

        // Collect all the next nodes for the appropriate chunk size 
        for (let j = 0; j < size; j++) {
            tail = curr;
            curr = curr.next;
        }
        tail.next = null; // set tail pointer to null
     }
     return result;
};