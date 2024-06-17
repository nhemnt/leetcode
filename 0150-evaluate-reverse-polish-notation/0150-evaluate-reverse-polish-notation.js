/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    let result = 0;
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(tokens[i])
        } else {
            const b = Number(stack.pop())
            const a = Number(stack.pop())
            let result;
            switch (tokens[i]) {
                case "+": {
                    result = a + b
                    break;
                }
                case "-": {
                    result = a - b
                    break;
                }
                case "*": {
                    result = a * b
                    break;
                }
                case "/": {
                    const output = a / b
                    result = output > 0 ? Math.floor(output) : Math.ceil(output)
                    break;
                }
            }

            stack.push(result)
        }
        // console.log({ stack });
    }
    // console.log(stack);
    return stack[0]
};