import { describe, expect, test } from "vitest";
import { contrastRatio } from "@/lib/contrast";

describe("contrastRatio", () => {
  test("black on white is 21:1", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 0);
  });

  test("is symmetric", () => {
    expect(contrastRatio("#5E17EB", "#FFFFFF")).toBeCloseTo(contrastRatio("#FFFFFF", "#5E17EB"), 5);
  });

  test("violet on white passes AA for body text", () => {
    expect(contrastRatio("#5E17EB", "#FFFFFF")).toBeGreaterThan(4.5);
  });

  test("rejects malformed hex", () => {
    expect(() => contrastRatio("5E17EB", "#FFFFFF")).toThrow(/hex/i);
  });
});
