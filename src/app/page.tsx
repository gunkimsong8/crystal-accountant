import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";
import { articles, services } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="homeHero">
        <div className="heroOrb orbOne" />
        <div className="heroOrb orbTwo" />
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow light">Accounting for international business in Thailand</p>
            <h1>Clarity for your business. <em>Confidence</em> for what comes next.</h1>
            <p className="heroLead">
              English-speaking accounting, tax, and compliance support for foreign-owned companies in Thailand.
            </p>
            <div className="buttonGroup">
              <Link href="/contact/" className="button buttonLight">Talk to our team <span aria-hidden="true">↗</span></Link>
              <Link href="/services/" className="button buttonGhost">Explore services <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="heroGraphic" aria-hidden="true">
            <div className="crystal crystalBack" />
            <div className="crystal crystalFront">
              <span>BEYOND</span>
              <strong>EXPECTED</strong>
            </div>
            <div className="heroNote">Based in Thailand<br />Working in English</div>
          </div>
        </div>
        <div className="shell heroProof">
          <p>Built for foreign-owned businesses</p>
          <span />
          <p>Clear English communication</p>
          <span />
          <p>Proactive, dependable follow-up</p>
        </div>
      </section>

      <section className="section introSection">
        <div className="shell split">
          <div>
            <p className="eyebrow">Your local accounting partner</p>
            <h2>Local expertise should never feel difficult to access.</h2>
          </div>
          <div className="largeCopy">
            <p>
              Running a business in another country comes with enough complexity. Your accounting partner should remove it—not add to it.
            </p>
            <p>
              We combine practical knowledge of Thailand with responsive English communication, so you always know what matters, what&apos;s next, and who is taking care of it.
            </p>
            <Link href="/about/" className="textLink">Why Crystal Accounting <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section serviceSection">
        <div className="shell">
          <div className="sectionHeading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Essential support,<br />handled with care.</h2>
            </div>
            <p>From day-to-day records to forward-looking tax advice, our services work together to keep your business informed and compliant.</p>
          </div>
          <div className="serviceList">
            {services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="section differenceSection">
        <div className="shell">
          <p className="eyebrow light">The Crystal difference</p>
          <div className="differenceGrid">
            <h2>Beyond the expected is how we work.</h2>
            <div className="differenceItems">
              <article><span>01</span><div><h3>We speak your language</h3><p>Clear, professional English communication without unnecessary jargon.</p></div></article>
              <article><span>02</span><div><h3>We think ahead</h3><p>We identify deadlines, risks, and planning opportunities before they become urgent.</p></div></article>
              <article><span>03</span><div><h3>We follow through</h3><p>Questions are answered, open items are tracked, and work is carried through to completion.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section insightsSection">
        <div className="shell">
          <div className="sectionHeading alignEnd">
            <div><p className="eyebrow">Insights</p><h2>Useful answers for doing business in Thailand.</h2></div>
            <Link href="/insights/" className="textLink">View all insights <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="articleGrid">
            {articles.map((article, index) => <ArticleCard article={article} featured={index === 0} key={article.slug} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
