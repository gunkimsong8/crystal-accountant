import type { MetadataRoute } from "next";
import { articles, services, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/insights", "/contact", "/privacy"];
  return [
    ...routes.map((route) => ({ url: `${siteConfig.url}${route}/`, lastModified: new Date("2026-09-01") })),
    ...services.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}/`, lastModified: new Date("2026-09-01") })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/insights/${article.slug}/`, lastModified: new Date(article.published) })),
  ];
}
