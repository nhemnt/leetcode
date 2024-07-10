/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode();
    l3 = list3;
    while(list1 || list2){
        if(!list1){
            l3.next = list2;
            break
        }
        if(!list2){
            l3.next = list1;
            break
        }

        if(list1.val < list2.val){
            l3.next = new ListNode(list1.val);
            list1 = list1.next;
        }else{
            l3.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        l3 = l3.next;
    }

    return list3.next;
};