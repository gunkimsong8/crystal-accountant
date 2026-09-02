export type FeeRow = { label: string; amount: number | null };

export type FeeTable = {
  id: string;
  title: string;
  description: string;
  columns: [string, string];
  rows: FeeRow[];
  notes: string[];
};

const BY_CASE_LABEL = "By case";

const thbFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formatThb = (amount: number | null): string =>
  amount === null ? BY_CASE_LABEL : thbFormatter.format(amount);

export const feesUpdated = "1/10/2025";

export const feeDisclaimer =
  "The rates shown in this table are preliminary estimates only. The final service fee to be charged before the commencement of service will be based on the discussion and agreement reached. Crystal Accounting will issue an invoice for the final net amount accordingly.";

export const feeTables: FeeTable[] = [
  {
    id: "monthly-accounting",
    title: "Monthly Accounting Service Fee",
    description:
      "Our accounting service includes monthly bookkeeping and preparation of financial records, preparation and submission of monthly tax filings (e.g. VAT, withholding tax), annual financial statement preparation and submission to the Department of Business Development (DBD), and monthly submission of Social Security Fund. Fees are structured based on the number of transactions per month. Fees may vary depending on the complexity of each company.",
    columns: ["Number of bills per month", "Service fee (THB)"],
    rows: [
      { label: "Less than 10 transactions", amount: 3500 },
      { label: "11 - 30 transactions", amount: 5000 },
      { label: "31 - 50 transactions", amount: 6500 },
      { label: "51 - 70 transactions", amount: 8000 },
      { label: "71 - 100 transactions", amount: 10250 },
      { label: "101 - 150 transactions", amount: 14000 },
      { label: "151 - 200 transactions", amount: 17750 },
      { label: "201 - 250 transactions", amount: 21500 },
      { label: "251 - 300 transactions", amount: 25250 },
      { label: "More than 300 transactions", amount: null },
    ],
    notes: [],
  },
  {
    id: "annual-tax-filing",
    title: "Annual Tax Filing",
    description: "Preparation and submission of corporate income tax returns.",
    columns: ["Return", "Service fee (THB)"],
    rows: [
      { label: "Half year corporate income tax (PND51)", amount: 5000 },
      { label: "Full year corporate income tax (PND50)", amount: 15000 },
    ],
    notes: [],
  },
  {
    id: "audit",
    title: "Audit Service Fee",
    description:
      "Audit fees are determined based on your company's annual revenue. The final fee will be adjusted based on the specific complexities of each company.",
    columns: ["Revenue (THB)", "Audit fee (THB)"],
    rows: [
      { label: "Less than 200,000", amount: 8000 },
      { label: "200,001 - 1,000,000", amount: 10000 },
      { label: "1,000,001 - 3,000,000", amount: 12000 },
      { label: "3,000,001 - 5,000,000", amount: 13000 },
      { label: "5,000,001 - 7,000,000", amount: 15000 },
      { label: "7,000,001 - 10,000,000", amount: 16000 },
      { label: "10,000,001 - 15,000,000", amount: 20000 },
      { label: "15,000,001 - 20,000,000", amount: 25000 },
      { label: "20,000,001 - 30,000,000", amount: 35000 },
      { label: "30,000,001 - 40,000,000", amount: 40000 },
      { label: "40,000,001 - 50,000,000", amount: 50000 },
      { label: "More than 50,000,000", amount: null },
    ],
    notes: [],
  },
  {
    id: "yearly-accounting",
    title: "Yearly Accounting Service Fee",
    description:
      "This service is suitable for companies that are not VAT-registered and have no business operations during the year, with only a few transactions such as interest income, accounting service fees, and audit fees. It includes bookkeeping and preparation of financial records, preparation and submission of half year and full year corporate income tax (PND51, PND50), annual financial statement preparation and submission to the DBD, and audit service. The total fee is THB 21,000.",
    columns: ["Service", "Service fee (THB)"],
    rows: [
      { label: "Accounting and tax services", amount: 13000 },
      { label: "Audit services", amount: 8000 },
    ],
    notes: [
      "In case there are operations and the company is not VAT registered, the yearly accounting service fee will need to be discussed separately.",
    ],
  },
];
