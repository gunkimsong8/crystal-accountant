import { describe, expect, test } from "vitest";
import { services } from "@/lib/services";

const EXPECTED_SLUGS = ["accounting-compliance", "audit-assurance", "tax-advisory", "payroll-services", "company-setup"];

describe("services", () => {
  test("has exactly the five approved slugs in order", () => {
    expect(services.map((s) => s.slug)).toEqual(EXPECTED_SLUGS);
  });

  test("every service has complete content", () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(10);
      expect(service.shortTitle.length).toBeGreaterThan(3);
      expect(service.description.length).toBeGreaterThan(40);
      expect(service.intro.length).toBeGreaterThan(40);
      expect(service.outcomes).toHaveLength(3);
      expect(service.includes.length).toBeGreaterThanOrEqual(4);
      expect(service.process).toHaveLength(3);
      expect(service.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });

  test("uses the deck's filing references", () => {
    const text = JSON.stringify(services);
    for (const term of ["PP30", "PND 1, 3, 53", "PND 50", "PND 51", "DBD", "BOI", "FBL", "SSO"]) {
      expect(text).toContain(term);
    }
  });
});
