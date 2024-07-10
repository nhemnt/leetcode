/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const temp = new ListNode();
    let copy = temp;
    let counter = 1;
    let current = head;
    let arr = []
    while (current) {
        if (counter < left) {
            copy.next = new ListNode(current.val);
            copy = copy.next
        }
        else if (counter >= left && counter <= right) {
            arr.push(current.val);
        } else {
            break;
        }

        counter++
        current = current.next;
    }

    arr = arr.reverse()
    arr.forEach(item => {
        let node = new ListNode(item)
        copy.next = node;
        copy = copy.next;
    })

    copy.next = current;

    return temp.next;

};