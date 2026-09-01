import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting & Tax Insights",
  description: "Practical English-language guidance about accounting, tax, and doing business in Thailand.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Straightforward guidance for doing business in Thailand." description="Practical perspectives on accounting, tax, compliance, and the decisions international business owners face." />
      <section className="section">
        <div className="shell articleGrid articleGridPage">
          {articles.map((article, index) => <ArticleCard article={article} featured={index === 0} key={article.slug} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
