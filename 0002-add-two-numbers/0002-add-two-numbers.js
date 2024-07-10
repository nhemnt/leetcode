/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode()
    let current = l3;
    let carry = 0;

    while(l1 !== null || l2 !== null){
        const x = l1 === null ? 0 : l1.val;
        const y = l2 === null ? 0 : l2.val

        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0){
        current.next = new ListNode(carry);
    }

    return l3.next;
};