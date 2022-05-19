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
    let a = '', b = ''
     while (l1) {
        a = (l1.val || 0) +a;
        l1 = l1.next;
    }
    
    while (l2) {
        b = (l2.val || 0) +b;
        l2 = l2.next;
    }
    
    
    
    const sum = (BigInt(a) +BigInt(b)).toString().split("").reverse();
    let head;
    let prev;
    for(let i =0; i<sum.length; i++){
        const node = new ListNode(sum[i])
         if (prev) {
            prev.next = node;
        }
        
        prev = node;
        if(!head) head = node;
    }
    
    return head
};