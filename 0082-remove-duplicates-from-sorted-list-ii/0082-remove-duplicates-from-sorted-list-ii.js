/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;

    while (current !== null) {
        if (current.next !== null && current.val === current.next.val) {
            while (current.next !== null && current.val === current.next.val) {
                current = current.next;
            }
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }

    return dummy.next;
};