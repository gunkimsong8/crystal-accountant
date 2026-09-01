import Link from "next/link";
import { formatDate, type Article } from "@/lib/site";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={featured ? "articleCard featured" : "articleCard"}>
      <div className="articleVisual" aria-hidden="true">
        <span>{article.category}</span>
      </div>
      <div className="articleBody">
        <p className="articleMeta">{formatDate(article.published)} · {article.readTime}</p>
        <h3><Link href={`/insights/${article.slug}/`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link href={`/insights/${article.slug}/`} className="textLink">
          Read insight <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
