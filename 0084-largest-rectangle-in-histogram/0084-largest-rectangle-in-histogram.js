/**
 * @param {number[]} heights
 * @return {number}
 */
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


function SNL(arr) {
    const s = new Stack();
    const r = []
    for (let i = 0; i < arr.length; i++) {
        while (!s.isEmpty()) {
            if (arr[s.peek()] < arr[i]) {
                r.push(s.peek());
                s.push(i);
                break;
            } else {
                s.pop();
            }
        }

        if (s.isEmpty()) {
            r.push(-1);
            s.push(i);
        }
    }

    return r;
}

function SNR(arr) {
    const s = new Stack()
    const r = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (!s.isEmpty()) {
            if (arr[s.peek()] < arr[i]) {
                r.push(s.peek());
                s.push(i);
                break;
            } else {
                s.pop();
            }
        }

        if (s.isEmpty()) {
            r.push(arr.length);
            s.push(i);
        }
    }

    return r.reverse();
}
var largestRectangleArea = function (heights) {
    const snl = SNL(heights);

    const snr = SNR(heights)
    return heights.reduce((acc, curr, i) => {
        const sum = (snr[i] - snl[i] - 1) * curr;
        return acc > sum ? acc : sum;
    }, 0)
};