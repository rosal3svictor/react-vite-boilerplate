import sum from "./sum";
import { describe, expect, it } from "vitest";

describe("#sum", () => {
  it("Returns 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });
  it("Returns the same number with one number", () => {
    expect(sum(2)).toBe(2);
  });
  it("Returns sum with multiple numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
