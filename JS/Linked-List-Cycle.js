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
    // ok i looked quicly to the answer yesterday, let's see if i remember it
    // so basically to detect if there's a cycle in a given list, we take two pointers, one is slowly moving and one is moving faster
    // slow means traversing node by node, fast means traversing 2 nodes at a time, so if there was a cycle, eventually slow
    // pointer will reach the fast one and vice versa.
    // AFTER SUBMIT: apparently we're doing some redundant ops because we're not starting both pointers from same start
    // and i made them that way to avoid meeting this condition if (slow === fast) return true; at first thing
    // before any movements happen. previous solution was correct, but somehow a bit redundant. 
    // loop up Floyd's Cycle-Finding Algorithm
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false
};