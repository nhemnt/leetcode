/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    const map = new Map();
    let current = head;
    while (current) {
        map.set(current, new _Node(current.val));
        current = current.next
    }
    current = head;
    while (current) {
        let copiedNode = map.get(current);
        copiedNode.next = map.get(current.next) || null;
        copiedNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
};