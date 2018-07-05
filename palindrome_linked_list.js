var isPalindrome = function(head) {    
    if(head === null || head.next == null) return true;
    let slow = head;
    let fast = head;
    
    while(fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    slow = reverse(slow);

    while(slow !== null) {
        if(slow.val !== head.val) return false;
        slow = slow.next;
        head = head.next;
    }

    return true;
}

var reverse = function(head) {
    let prev = null;
    while(head !== null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// runtime: O(n)