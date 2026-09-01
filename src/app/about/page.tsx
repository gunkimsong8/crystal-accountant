import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the English-speaking accounting partner helping international businesses operate with clarity in Thailand.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Crystal Accounting" title="Your business deserves a partner who stays with the details." description="We help international owners navigate accounting and compliance in Thailand with clear advice, proactive planning, and dependable follow-through." />
      <section className="section">
        <div className="shell split">
          <div><p className="eyebrow">Why we exist</p><h2>To make local complexity feel manageable.</h2></div>
          <div className="largeCopy">
            <p>Crystal Accounting was built around a simple belief: professional service is not only about completing the technical work. It is about making sure clients understand what is happening and feel supported throughout.</p>
            <p>For foreign business owners in Thailand, that means accessible English communication, practical explanations, and a team that actively tracks what needs to happen next.</p>
          </div>
        </div>
      </section>
      <section className="section softSection">
        <div className="shell">
          <div className="sectionHeading"><div><p className="eyebrow">How we work</p><h2>Service that goes beyond the expected.</h2></div></div>
          <div className="valueGrid">
            <article><span>01</span><h3>Clear</h3><p>We translate local requirements into straightforward English and useful actions.</p></article>
            <article><span>02</span><h3>Proactive</h3><p>We look ahead, flag priorities early, and help you plan before decisions are fixed.</p></article>
            <article><span>03</span><h3>Accountable</h3><p>We follow up, track open items, and take ownership of the work entrusted to us.</p></article>
            <article><span>04</span><h3>Practical</h3><p>We focus on advice and processes that work in the day-to-day reality of your business.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell statementPanel">
          <p className="eyebrow light">Our commitment</p>
          <blockquote>“You should never have to wonder whether your accounting work is moving forward.”</blockquote>
          <p>We keep communication open, make responsibilities visible, and stay engaged until the work is complete.</p>
          <Link href="/contact/" className="textLink light">Meet your accounting partner <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
