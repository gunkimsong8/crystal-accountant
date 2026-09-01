import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { articles, formatDate, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}/` },
    openGraph: { type: "article", publishedTime: article.published },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.published,
    description: article.excerpt,
    author: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <article>
        <header className="articleHero">
          <div className="narrow">
            <Link href="/insights/" className="backLink">← All insights</Link>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="articleIntro">{article.excerpt}</p>
            <p className="articleMeta">{formatDate(article.published)} · {article.readTime}</p>
          </div>
        </header>
        <div className="narrow articleContent">
          {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <aside className="articleDisclaimer">This article provides general information and is not legal or tax advice. Requirements can change and should be reviewed for your specific circumstances.</aside>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <CtaBand />
    </>
  );
}
