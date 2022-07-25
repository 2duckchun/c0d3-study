// fn will be an object with all your preflight solutions
const fn = require("./less3diff.js");

describe("less3diff function", () => {
  it("글자 틀린게 3개 이상 경우", () => {
    const result = fn.less3Diff("spiderman", "spideaaaa");
    expect(result).toEqual(false);
  });
  it("글자 틀린게 3개 미만인 경우", () => {
    const result = fn.less3Diff('spiderman', 'spyderman');
    expect(result).toEqual(true);
  });
  it("문자열이 3개 미만이라면 참이다.", () => {
    const result = fn.less3Diff('jk', 'lm');
    expect(result).toEqual(true);
  });``
  it("글자 3개 거짓", () => {
    const result = fn.less3Diff('ABC', 'kkk');
    expect(result).toEqual(false);
  });
});
