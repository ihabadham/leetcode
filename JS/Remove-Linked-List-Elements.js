/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;

    while (head.val === val && head.next) {
        head = head.next;
    }

    if (head.val === val) return null;

    if (!head.next) return head;

    let prev = head;
    let curr = head.next;
    let next = head.next.next;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr.next = null;
            curr = next;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
        if (next) {
            next = next.next;
        }
    }

    return head;
};