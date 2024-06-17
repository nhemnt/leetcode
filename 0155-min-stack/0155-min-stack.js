
var MinStack = function () {
    this.stack = [];
    this.min = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    this.min = Math.min(this.min, val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const item = this.stack.pop();
    
    if(item === this.min){
        let min = Infinity;
        for (let i = 0; i < this.stack.length; i++) {
            min = Math.min(min, this.stack[i]);
        }
        this.min = min;
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */