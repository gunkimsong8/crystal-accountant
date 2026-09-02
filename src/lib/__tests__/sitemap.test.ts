import { describe, expect, test } from "vitest";
import sitemap from "@/app/sitemap";
import { services, articles } from "@/lib/site";

describe("sitemap", () => {
  const urls = sitemap().map((entry) => entry.url);

  test("includes the pricing page with a trailing slash", () => {
    expect(urls.some((url) => url.endsWith("/pricing/"))).toBe(true);
  });

  test("includes every service and article", () => {
    for (const { slug } of services) expect(urls.some((url) => url.endsWith(`/services/${slug}/`))).toBe(true);
    for (const { slug } of articles) expect(urls.some((url) => url.endsWith(`/insights/${slug}/`))).toBe(true);
  });

  test("every url ends with a slash", () => {
    for (const url of urls) expect(url.endsWith("/")).toBe(true);
  });
});
