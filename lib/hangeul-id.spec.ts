import { integerToHangeulId } from "./hangeul-id";
import { expect } from "chai";

describe("test: hangeul id", () => {
  it("test: hangeul id - ksx1001", () => {
    let res = integerToHangeulId(5529549, "ksx1001");
    expect(res).to.equal("각간힝");
  });
});
