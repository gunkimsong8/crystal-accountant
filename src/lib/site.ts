export const siteConfig = {
  name: "Crystal Accounting",
  legalName: "Crystal Accounting Company Limited",
  description:
    "English-speaking accounting, tax, audit, payroll, and company setup services for international businesses in Thailand.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://crystalaccounting.co.th",
  email: "info@crystalaccounting.co.th",
  phone: "+66 91 626 6241",
  phoneHref: "tel:+66916266241",
  address: ["33/65 Soi Nawamin 85, Intersection 2-1", "Nawamin Subdistrict, Bueng Kum District", "Bangkok 10240"],
  taxId: "0105568012538",
};

export { services, type Service } from "./services";
export { articles, type Article } from "./articles";

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
