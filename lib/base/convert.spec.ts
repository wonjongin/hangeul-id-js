import { convert_base_from_dec } from "./convert";
import { expect } from "chai";

describe("test: convert", () => {
  it("test: convert_base_from_dec", () => {
    let res1 = convert_base_from_dec(5529549, 2350);
    let res2 = convert_base_from_dec(2350, 2350);
    expect(res1).to.deep.equal([1, 2, 2349]);
    expect(res2).to.deep.equal([1, 0]);
  });
});
