/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    let current = head;
    let length = 0;
    while (current !== null) {
        length++;
        current = current.next
    }

    k = k % length;

    length -= k;
    let node = new ListNode(0);
    copy = node;
    current = head;
    for (let i = 0; i < length; i++) {
        copy.next = current;
        current = current.next;
        copy = copy.next
    }
    copy.next = null;
    let newNode = new ListNode(0);
    copyNewNode = newNode;
    for (let i = length; i < length + k; i++) {
        copyNewNode.next = current
        current = current.next;
        copyNewNode = copyNewNode.next;
    }
    copyNewNode.next = node.next
    return newNode.next

};