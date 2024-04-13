
class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) return undefined;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        return this.items.join(" ");
    }
}
let s, i;
var StockSpanner = function() {
    s= new Stack();
    i = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
 
StockSpanner.prototype.next = function(price) {
    i++;
    console.log({i, s: s.printStack()});
    while(!s.isEmpty()){
        if(price < s.peek()[0]){
            const val = i - s.peek()[1] 
            s.push([price, i]);
            return val;
        }else{
            s.pop();
        }
    }
    s.push([price, i]);
    return i + 1; 
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */