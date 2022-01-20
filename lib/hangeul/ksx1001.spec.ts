import { ksx1001_letters, ksx1001_oneLetter } from "./ksx1001";
import { expect } from "chai";

describe("test: ksx1001", () => {
  it("test: ksx1001_oneLetter", () => {
    let res = ksx1001_oneLetter(2349);
    expect(res).to.equal("힝");
  });

  it("test: ksx1001_letters", () => {
    let res = ksx1001_letters(2350);
    expect(res).to.equal("각가");
  });
});
