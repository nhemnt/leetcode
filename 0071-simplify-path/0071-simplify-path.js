/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];

    path.split("/").filter(x => x).forEach(path => {
        if(path === ".."){
            stack.pop()
        }else if(path !== "."){
            stack.push(path);
        }
    })
    return "/" + stack.join("/");
};