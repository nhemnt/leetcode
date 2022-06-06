/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let copyA = headA;
    let copyB = headB;
    
    while(copyA !== copyB){
        copyA = copyA.next;
        copyB = copyB.next;
        
        if(copyA === copyB){
            return copyA;
        }

        if(copyA === null){
            copyA = headB;
        }
        if(copyB === null){
            copyB = headA
        }
    }
    
    return copyA;
};