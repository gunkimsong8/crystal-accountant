export const siteConfig = {
  name: "Crystal Accounting",
  description:
    "English-speaking accounting, tax, audit, payroll, and compliance support for international businesses in Thailand.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://crystalaccounting.co.th",
  email: "podjanan.k@crystalaccounting.co.th",
  phone: "+66 91 626 6241",
};

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
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping Services in Thailand",
    shortTitle: "Accounting & Bookkeeping",
    eyebrow: "Accurate records. Clear decisions.",
    description:
      "Reliable monthly bookkeeping and financial reporting for international businesses operating in Thailand.",
    intro:
      "Stay on top of your numbers and local obligations with an English-speaking team that keeps your records current, explains what they mean, and follows every item through.",
    outcomes: ["Reliable monthly close", "Clear financial visibility", "Fewer compliance surprises"],
    includes: [
      "Transaction recording and general ledger maintenance",
      "Monthly management accounts and financial reports",
      "Accounts payable and receivable support",
      "Bank and balance-sheet reconciliations",
      "Thai statutory accounting coordination",
      "Year-end closing support",
    ],
    process: [
      { title: "Understand", description: "We review your operations, records, systems, and reporting priorities." },
      { title: "Organize", description: "We agree a practical document flow and monthly closing schedule." },
      { title: "Deliver", description: "We maintain your books, flag issues early, and explain your reports in English." },
    ],
    faqs: [
      { question: "Can you work with a foreign-owned Thai company?", answer: "Yes. Our service is designed for international owners who need local accounting support and clear English communication." },
      { question: "How often will we receive reports?", answer: "The reporting schedule is agreed during onboarding, with monthly reporting available for ongoing clients." },
    ],
  },
  {
    slug: "audit-services",
    title: "Audit Services for Companies in Thailand",
    shortTitle: "Audit Services",
    eyebrow: "Prepared, coordinated, dependable.",
    description:
      "Practical audit preparation and coordination that helps Thailand-registered companies meet annual requirements.",
    intro:
      "We help your team prepare accurate schedules, resolve questions, and coordinate the annual audit without last-minute confusion.",
    outcomes: ["Smoother annual audit", "Audit-ready records", "Clear issue tracking"],
    includes: [
      "Audit readiness review",
      "Financial statement preparation support",
      "Lead schedules and supporting documentation",
      "Coordination with licensed external auditors",
      "Resolution tracking for audit questions",
      "Post-audit improvement recommendations",
    ],
    process: [
      { title: "Review", description: "We assess your records and identify missing or unusual items." },
      { title: "Prepare", description: "We organize schedules, support, and financial statement information." },
      { title: "Coordinate", description: "We track requests through completion and keep stakeholders informed." },
    ],
    faqs: [
      { question: "Does every Thai company need an annual audit?", answer: "Most Thailand-registered companies have annual financial statement and audit obligations. The exact requirement depends on the entity and should be confirmed for your circumstances." },
      { question: "Can you coordinate with our existing auditor?", answer: "Yes. We can prepare records and coordinate requests with your appointed licensed auditor." },
    ],
  },
  {
    slug: "tax-consulting",
    title: "Tax Consulting & Planning in Thailand",
    shortTitle: "Tax Consulting & Planning",
    eyebrow: "Plan ahead. Act with confidence.",
    description:
      "Proactive Thai tax advice and planning for international businesses, explained clearly in English.",
    intro:
      "Tax decisions should happen before a deadline. We help you understand your position, plan responsibly, and keep day-to-day filings aligned with the bigger picture.",
    outcomes: ["Earlier tax visibility", "Practical planning options", "Confident compliance"],
    includes: [
      "Corporate income tax planning",
      "VAT and withholding tax guidance",
      "Transaction and contract tax review",
      "Tax compliance health checks",
      "Support with tax authority questions",
      "Plain-English advisory notes",
    ],
    process: [
      { title: "Assess", description: "We understand the transaction, facts, goals, and current tax position." },
      { title: "Advise", description: "We explain relevant considerations and practical options in plain English." },
      { title: "Follow through", description: "We help translate the chosen approach into compliant actions and filings." },
    ],
    faqs: [
      { question: "Can you advise before we sign a contract?", answer: "Yes. Early review usually provides more room to identify tax implications and practical options." },
      { question: "Do you provide advice in English?", answer: "Yes. English communication is a core part of our service for international business owners." },
    ],
  },
  {
    slug: "payroll-services",
    title: "Payroll Services in Thailand",
    shortTitle: "Payroll Services",
    eyebrow: "On time, accurate, confidential.",
    description:
      "Managed payroll support for businesses that need accurate calculations, clear reporting, and reliable follow-up.",
    intro:
      "Give your team a dependable monthly payroll process while keeping management informed and employee information handled carefully.",
    outcomes: ["Consistent payroll cycles", "Clear monthly records", "Less administration"],
    includes: [
      "Monthly payroll calculations",
      "Payslip and payroll report preparation",
      "Social security coordination",
      "Payroll tax calculation support",
      "Joiner and leaver updates",
      "Annual payroll reporting support",
    ],
    process: [
      { title: "Set up", description: "We confirm employee data, policies, deadlines, and approval roles." },
      { title: "Process", description: "We calculate the payroll and send reports for authorized review." },
      { title: "Complete", description: "We prepare agreed outputs and maintain an organized monthly record." },
    ],
    faqs: [
      { question: "Can you support a small international team?", answer: "Yes. We tailor the process to your headcount and reporting needs." },
      { question: "How is payroll information protected?", answer: "Access and delivery arrangements are agreed with authorized contacts to limit exposure of confidential employee data." },
    ],
  },
  {
    slug: "corporate-compliance",
    title: "Corporate Compliance & Accounting Outsourcing",
    shortTitle: "Corporate Compliance",
    eyebrow: "One accountable local partner.",
    description:
      "Coordinated accounting and recurring compliance support for foreign-owned companies in Thailand.",
    intro:
      "Simplify local administration with one responsive team that tracks recurring obligations, coordinates specialist work, and keeps you updated.",
    outcomes: ["One coordinated workflow", "Visible deadlines", "Responsive local support"],
    includes: [
      "Recurring compliance calendar",
      "Accounting function outsourcing",
      "Management reporting coordination",
      "Tax filing coordination",
      "Annual closing and audit support",
      "Ongoing English-language communication",
    ],
    process: [
      { title: "Map", description: "We map your entities, workflows, deadlines, and responsible parties." },
      { title: "Manage", description: "We coordinate recurring tasks through a clear calendar and document flow." },
      { title: "Report", description: "We provide concise updates, follow up on open items, and raise risks early." },
    ],
    faqs: [
      { question: "Can you act as our outsourced accounting team?", answer: "Yes. We can agree a scope covering recurring accounting and coordination based on your internal resources." },
      { question: "Will we know what is due and when?", answer: "Yes. A visible compliance schedule and proactive follow-up are central to the service." },
    ],
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  published: string;
  category: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "accounting-obligations-thailand",
    title: "A practical guide to accounting obligations in Thailand",
    excerpt: "The recurring records, filings, and annual work that foreign business owners should plan for.",
    published: "2026-08-20",
    category: "Accounting",
    readTime: "6 min read",
    sections: [
      { heading: "Start with reliable records", paragraphs: ["A Thailand-registered company needs complete accounting records supported by appropriate documents. A consistent monthly process makes it easier to see performance, answer questions, and prepare required filings.", "Agree early who supplies sales, purchase, bank, payroll, and contract information—and set a closing date that the business can maintain."] },
      { heading: "Build around recurring deadlines", paragraphs: ["Tax and payroll obligations follow different cycles. A shared compliance calendar should identify each deadline, the information needed, the reviewer, and the person responsible for submission.", "When operations or transactions change, review the calendar rather than assuming last year's process still fits."] },
      { heading: "Prepare for year-end throughout the year", paragraphs: ["Year-end should confirm work already completed, not begin a search for missing information. Reconcile balance-sheet accounts, retain supporting records, and address unusual items as they arise.", "Professional advice should reflect your company's facts. An early conversation with your accountant can prevent avoidable pressure later."] },
    ],
  },
  {
    slug: "choose-accounting-firm-thailand",
    title: "How to choose an accounting firm in Thailand",
    excerpt: "Five questions international owners can use to evaluate communication, process, and accountability.",
    published: "2026-08-08",
    category: "Guides",
    readTime: "5 min read",
    sections: [
      { heading: "Look beyond a service list", paragraphs: ["Most firms can present a similar list of accounting and tax services. The meaningful differences appear in how the team communicates, plans work, and takes responsibility when an issue needs attention.", "Ask who your day-to-day contact will be and how progress, missing information, and deadlines are reported."] },
      { heading: "Test whether the process is clear", paragraphs: ["A good proposal should define scope, timing, responsibilities, outputs, and items that are not included. For an international owner, it should also explain how Thai requirements will be communicated in English.", "Ask to see the proposed onboarding steps and monthly document flow before deciding."] },
      { heading: "Choose proactive support", paragraphs: ["Compliance is essential, but useful support also looks forward. Your accountant should raise unusual trends, upcoming decisions, and planning opportunities early enough for you to act.", "The right partner combines local knowledge with dependable follow-up and advice that management can use."] },
    ],
  },
  {
    slug: "thai-corporate-tax-planning",
    title: "When should a business review its Thai corporate tax position?",
    excerpt: "Why tax planning works best before major transactions and well ahead of year-end.",
    published: "2026-07-24",
    category: "Tax",
    readTime: "4 min read",
    sections: [
      { heading: "Review tax before decisions are final", paragraphs: ["New contracts, related-party arrangements, investment, financing, and changes in how revenue is earned can affect the company's tax position. Review those implications while options remain open.", "A tax review should begin with the commercial facts, not only the document title."] },
      { heading: "Use management accounts as an early signal", paragraphs: ["Current records help estimate annual performance and identify unusual movements. Periodic forecasts can make upcoming tax payments more visible and reduce year-end surprises.", "If the records are incomplete, improving the accounting process is often the first tax-planning step."] },
      { heading: "Keep advice connected to implementation", paragraphs: ["A recommendation only works when contracts, invoices, accounting treatment, and filings remain aligned. Assign owners to each follow-up action and retain the supporting analysis.", "Tax outcomes depend on the specific facts and current law, so obtain advice tailored to your business."] },
    ],
  },
];

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
