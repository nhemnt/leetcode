const longestStrChain = require("./1048-longest-string-chain");

describe("1048-longest-string-chain", () => {
  test("test1", () => {
    const input = ["a","b","ba","bca","bda","bdca"];
    const output = 4;
    expect(longestStrChain(input)).toEqual(output);
  });

  test("test2", () => {
    const input = ["xbc","pcxbcf","xb","cxbc","pcxbc"];
    const output = 5;
    expect(longestStrChain(input)).toEqual(output);
  });

  test("test3", () => {
    const input = ["abcd","dbqca"];
    const output = 1;
    expect(longestStrChain(input)).toEqual(output);
  });
});
