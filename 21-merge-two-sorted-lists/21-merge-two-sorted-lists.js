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
var mergeTwoLists = function(l1, l2) {

  let o = {val: -1, next: null};
  let c = o;
    while(l1 && l2){
      // console.log(c);
      if(l1.val < l2.val){
        c.next = l1
        l1 = l1.next;
      }else{
        c.next = l2
        l2 = l2.next;
      }
      c = c.next;
     }
  
 c.next = l1 || l2;
  return o.next;
  
};