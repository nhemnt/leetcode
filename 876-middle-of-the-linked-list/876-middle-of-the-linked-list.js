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
var middleNode = function(head) {
    if(!head) return head;
    let copy = head;
    let count = 0
    while(head){
      head = head.next;
      count++
    }
  count = Math.floor(count/2);
  // console.log({count, copy});
  let i = 0
  while(i < count) {
    copy = copy.next;
    i++;
  }
  return copy;
};