function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // iterative approach would be to loop over the list with three pointers: prev, curr, and next
    // for each curr, we do curr.next = prev to reverese the arrow direction, and then move prev to curr, curr to next, and next= next.next
    // what if we have less than three nodes? if 0 or 1, just return head, if two, our approach hold if we we have
    // prev = null (before head), curr = head, and next = head.next
    // if (!head || !head.next) return head;
    // let prev = null;
    // let curr = head;
    // let next = head.next;

    // while (curr) {
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    //     if (next) next = next.next; // last node to flip will be curr, so next would be null
    // }

    // return prev;

    // ---------------------------------------------------------------------------------------------

    // recursive approach would be, if i have one node, then it's already reveresed, and if i have two nodes x and y
    // then to reverse them we do, x.next = null, y.next = x
    if (!head || !head.next) return head;

    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
};