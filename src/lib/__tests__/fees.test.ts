import { describe, expect, test } from "vitest";
import { feeDisclaimer, feesUpdated, feeTables, formatThb } from "@/lib/fees";

describe("formatThb", () => {
  test("formats thousands with separators and two decimals", () => {
    expect(formatThb(3500)).toBe("3,500.00");
    expect(formatThb(10250)).toBe("10,250.00");
  });
  test("renders null as by case", () => {
    expect(formatThb(null)).toBe("By case");
  });
});

describe("feeTables", () => {
  test("has the four published tables in order", () => {
    expect(feeTables.map((t) => t.id)).toEqual(["monthly-accounting", "annual-tax-filing", "audit", "yearly-accounting"]);
  });

  test("monthly accounting has 10 rows from 3,500 to by case", () => {
    const monthly = feeTables[0];
    expect(monthly.rows).toHaveLength(10);
    expect(monthly.rows[0]).toEqual({ label: "Less than 10 transactions", amount: 3500 });
    expect(monthly.rows[9]).toEqual({ label: "More than 300 transactions", amount: null });
  });

  test("audit has 12 rows from 8,000 to by case", () => {
    const audit = feeTables[2];
    expect(audit.rows).toHaveLength(12);
    expect(audit.rows[0].amount).toBe(8000);
    expect(audit.rows[10].amount).toBe(50000);
    expect(audit.rows[11].amount).toBeNull();
  });

  test("priced rows never decrease within a banded table", () => {
    for (const table of feeTables.filter((t) => t.id !== "yearly-accounting")) {
      const amounts = table.rows.map((r) => r.amount).filter((a): a is number => a !== null);
      const sorted = [...amounts].sort((a, b) => a - b);
      expect(amounts).toEqual(sorted);
    }
  });

  test("yearly package sums to 21,000", () => {
    const yearly = feeTables[3];
    expect(yearly.rows.reduce((sum, r) => sum + (r.amount ?? 0), 0)).toBe(21000);
  });

  test("disclaimer and update date are present", () => {
    expect(feeDisclaimer).toMatch(/preliminary estimates only/);
    expect(feesUpdated).toBe("1/10/2025");
  });
});
