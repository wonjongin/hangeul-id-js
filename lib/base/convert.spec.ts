import {
  convert_base,
  convert_base_from_dec,
  convert_base_to_dec,
} from "./convert";
import { expect } from "chai";

describe("test: convert", () => {
  it("test: convert_base_from_dec", () => {
    let res1 = convert_base_from_dec(5529549, 2350);
    let res2 = convert_base_from_dec(2350, 2350);
    expect(res1).to.deep.equal([1, 2, 2349]);
    expect(res2).to.deep.equal([1, 0]);
  });

  it("test: convert_base_to_dec", () => {
    let res1 = convert_base_to_dec([1, 2, 2349], 2350);
    let res2 = convert_base_to_dec([1, 0], 2350);
    expect(res1).to.deep.equal(5529549);
    expect(res2).to.deep.equal(2350);
  });

  it("test: convert_base", () => {
    let res1 = convert_base([1, 2, 2349], 2350, 16);
    let res2 = convert_base([1, 0], 2350, 2);
    expect(res1).to.deep.equal([5, 4, 5, 15, 12, 13]);
    expect(res2).to.deep.equal([1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0]);
  });
});
