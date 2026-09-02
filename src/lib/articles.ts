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
