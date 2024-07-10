class Node {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;

    this.add = (node) => {
        let next = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = next;
        next.prev = node;
    }

    this.remove = (node) => {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) {
        return -1;
    }

    const node = this.cache.get(key);
    this.remove(node);
    this.add(node);
    return node.value

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        this.remove(node);
    } else if (this.cache.size === this.capacity) {
        let lru = this.tail.prev;
        this.cache.delete(lru.key)
        this.remove(lru);
    }
    const newNode = new Node(key, value)
    this.add(newNode);
    this.cache.set(key, newNode);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */