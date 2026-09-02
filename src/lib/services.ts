export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  outcomes: string[];
  includes: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "accounting-compliance",
    title: "Accounting & Compliance Services in Thailand",
    shortTitle: "Accounting & Compliance",
    eyebrow: "Accurate records. Filed on time.",
    description:
      "Monthly bookkeeping under Thai GAAP / TFRS, VAT and withholding tax filings, social security submissions, and annual financial statements for foreign-owned companies in Thailand.",
    intro:
      "One English-speaking team keeps your books current, files every monthly return, and prepares the annual financial statements the Department of Business Development requires.",
    outcomes: ["Reliable monthly close", "Every filing on schedule", "Clear financial visibility"],
    includes: [
      "Monthly bookkeeping (Thai GAAP / TFRS)",
      "Monthly VAT filing (PP30)",
      "Withholding tax filing (PND 1, 3, 53)",
      "Payroll & Social Security (SSO) submission",
      "Financial statement preparation and DBD submission",
      "Monthly management reports explained in English",
    ],
    process: [
      { title: "Understand", description: "We review your operations, transaction volume, systems, and reporting priorities." },
      { title: "Organize", description: "We agree a document flow, a monthly closing date, and who approves each filing." },
      { title: "Deliver", description: "We keep the books, submit each return, flag issues early, and explain the reports." },
    ],
    faqs: [
      { question: "How are monthly fees set?", answer: "Fees follow the number of transactions per month. See the published fee schedule on our Pricing page; the final fee is confirmed before service starts." },
      { question: "Can you work with a foreign-owned Thai company?", answer: "Yes. The service is designed for international owners who need local compliance handled with clear English communication." },
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance Services in Thailand",
    shortTitle: "Audit & Assurance",
    eyebrow: "Statutory audit, coordinated end to end.",
    description:
      "Statutory annual audit by a licensed CPA, interim audit support, and coordination of submissions to the DBD and Revenue Department for Thailand-registered companies.",
    intro:
      "We prepare your records, conduct or coordinate the statutory audit with a licensed CPA, and see the audited statements through to submission.",
    outcomes: ["Audit completed on time", "Audit-ready records", "Filings submitted to DBD & RD"],
    includes: [
      "Statutory annual audit (by licensed CPA)",
      "Interim audit support",
      "Audit coordination and submission to DBD & RD",
      "Audit readiness review and lead schedules",
      "Resolution tracking for audit questions",
      "Post-audit recommendations",
    ],
    process: [
      { title: "Review", description: "We assess your records and identify missing or unusual items before fieldwork." },
      { title: "Audit", description: "The licensed CPA performs the audit while we resolve questions with your team." },
      { title: "Submit", description: "We coordinate the audited statements and filings with the DBD and Revenue Department." },
    ],
    faqs: [
      { question: "Does every Thai company need an annual audit?", answer: "Thailand-registered companies must file audited financial statements annually. We confirm the exact requirement for your entity." },
      { question: "How is the audit fee determined?", answer: "Audit fees are based on annual revenue bands. The current schedule is published on our Pricing page." },
    ],
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory & Corporate Tax Filing in Thailand",
    shortTitle: "Tax Advisory",
    eyebrow: "Plan ahead. File with confidence.",
    description:
      "Corporate income tax filing (PND 50, 51), tax planning and optimization, VAT registration, and BOI compliance advice for international businesses in Thailand.",
    intro:
      "Tax decisions should happen before a deadline. We file your half-year and annual corporate income tax returns and help you plan responsibly around them.",
    outcomes: ["PND 50 and PND 51 filed on time", "Earlier tax visibility", "Practical planning options"],
    includes: [
      "Corporate income tax filing (PND 50, 51)",
      "Tax planning and optimization",
      "VAT registration & deregistration",
      "BOI compliance and tax incentives advisory",
      "Transaction and contract tax review",
      "Support with Revenue Department questions",
    ],
    process: [
      { title: "Assess", description: "We understand the transaction, facts, goals, and current tax position." },
      { title: "Advise", description: "We explain the relevant considerations and practical options in plain English." },
      { title: "File", description: "We prepare and submit the returns and keep the supporting analysis on record." },
    ],
    faqs: [
      { question: "What do PND 50 and PND 51 cost?", answer: "The half-year return (PND 51) and full-year return (PND 50) are fixed fees listed on our Pricing page." },
      { question: "Can you advise before we sign a contract?", answer: "Yes. Early review gives more room to identify tax implications and options." },
    ],
  },
  {
    slug: "payroll-services",
    title: "Payroll Services in Thailand",
    shortTitle: "Payroll Services",
    eyebrow: "On time, accurate, confidential.",
    description:
      "Monthly payroll calculation, payslips, withholding tax (PND 1), and Social Security (SSO) submissions for companies employing staff in Thailand.",
    intro:
      "A dependable monthly payroll cycle that keeps management informed, meets Thai withholding and social security deadlines, and handles employee information carefully.",
    outcomes: ["Consistent payroll cycles", "PND 1 and SSO submitted monthly", "Less administration"],
    includes: [
      "Monthly payroll calculations and payslips",
      "Withholding tax on salaries (PND 1)",
      "Social Security (SSO) registration and monthly submission",
      "Joiner and leaver updates",
      "Annual withholding certificates (50 Tawi)",
      "Payroll reports for management review",
    ],
    process: [
      { title: "Set up", description: "We confirm employee data, policies, deadlines, and approval roles." },
      { title: "Process", description: "We calculate the payroll and send reports for authorized review." },
      { title: "Submit", description: "We file PND 1 and SSO and maintain an organized monthly record." },
    ],
    faqs: [
      { question: "Can you support a small international team?", answer: "Yes. We tailor the process to your headcount and reporting needs." },
      { question: "How is payroll information protected?", answer: "Access and delivery are agreed with authorized contacts to limit exposure of confidential employee data." },
    ],
  },
  {
    slug: "company-setup",
    title: "Company Setup & Assistance Services in Thailand",
    shortTitle: "Company Setup & Assistance",
    eyebrow: "From registration to first invoice.",
    description:
      "Company registration with the DBD, e-Tax invoice and e-Receipt registration, POS setup for retail, and Foreign Business License (FBL) advisory for foreign investors in Thailand.",
    intro:
      "Start operating with the right structure, registrations, and systems in place, guided in English by a team that stays on as your accountant.",
    outcomes: ["Company registered with the DBD", "Tax and e-invoicing registrations complete", "Ready to trade"],
    includes: [
      "Company registration with DBD",
      "e-Tax invoice & e-Receipt registration",
      "POS system setup for retail businesses",
      "FBL (Foreign Business License) advisory",
      "VAT and tax ID registration",
      "Bank account and initial compliance calendar setup",
    ],
    process: [
      { title: "Plan", description: "We confirm shareholders, capital, licences, and the registrations your business model needs." },
      { title: "Register", description: "We prepare and file the DBD registration and follow-on tax registrations." },
      { title: "Launch", description: "We set up invoicing and POS where needed and hand over to monthly accounting." },
    ],
    faqs: [
      { question: "Do foreign owners need a Foreign Business License?", answer: "It depends on ownership structure and business activity. We assess whether an FBL or an alternative route applies." },
      { question: "Can you continue as our accountant after setup?", answer: "Yes. Most clients move straight into our monthly Accounting & Compliance service." },
    ],
  },
];
