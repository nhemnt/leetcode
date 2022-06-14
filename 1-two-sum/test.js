const twoSum = require("./1-two-sum");

describe("1-two-sum", () => {
  test("test1", () => {
    const input = [2, 7, 11, 13];
    const target = 9;
    const output = [0,1];
    expect(twoSum(input, target)).toEqual(output);
  });

  test("test2", () => {
    const input = [3,2,4];
    const target = 6;
    const output = [1,2];
    expect(twoSum(input, target)).toEqual(output);
  });

  test("test3", () => {
    const input = [3,3];
    const target = 6;
    const output = [0,1];
    expect(twoSum(input, target)).toEqual(output);
  });
});
