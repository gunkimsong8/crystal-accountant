import { describe, expect, test } from "vitest";
import { readFileSync } from "node:fs";
import { BRAND_TOKENS, contrastRatio } from "@/lib/contrast";

const AA_BODY = 4.5;

const pairs: [keyof typeof BRAND_TOKENS, keyof typeof BRAND_TOKENS][] = [
  ["navy", "white"],
  ["muted", "white"],
  ["violet", "white"],
  ["white", "violet"],
  ["white", "violetFill"],
  ["white", "navy"],
  ["lavender", "navy"],
  ["lilac", "navy"],
  ["onDarkMuted", "navyDeep"],
  ["navy", "lavender"],
  ["muted", "soft"],
  ["error", "errorBg"],
  ["lavender", "violetFill"],
];

describe("brand token contrast", () => {
  test.each(pairs)("%s on %s meets AA body text", (fg, bg) => {
    expect(contrastRatio(BRAND_TOKENS[fg], BRAND_TOKENS[bg])).toBeGreaterThanOrEqual(AA_BODY);
  });
});

describe("globals.css uses tokens", () => {
  const css = readFileSync(new URL("../../app/globals.css", import.meta.url), "utf8");
  const rootBlock = css.slice(css.indexOf(":root"), css.indexOf("}", css.indexOf(":root")));
  const body = css.replace(rootBlock, "");

  test("root defines every brand token", () => {
    for (const [name, hex] of Object.entries(BRAND_TOKENS)) {
      const cssName = `--${name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;
      expect(rootBlock.toLowerCase()).toContain(`${cssName}: ${hex.toLowerCase()}`);
    }
  });

  test("no hardcoded hex colors outside :root", () => {
    expect(body.match(/#[0-9a-f]{3,6}\b/gi) ?? []).toEqual([]);
  });

  test("retired tokens are gone", () => {
    expect(css).not.toMatch(/--purple|--ink\b/);
  });
});
