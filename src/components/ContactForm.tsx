"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Submission failed");
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="fieldRow">
        <label>
          First name <span aria-hidden="true">*</span>
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          Last name <span aria-hidden="true">*</span>
          <input name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        Work email <span aria-hidden="true">*</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Company
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        How can we help? <span aria-hidden="true">*</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Accounting &amp; Compliance</option>
          <option>Audit &amp; Assurance</option>
          <option>Tax Advisory</option>
          <option>Payroll Services</option>
          <option>Company Setup &amp; Assistance</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Tell us about your needs <span aria-hidden="true">*</span>
        <textarea name="message" rows={5} required />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="checkField">
        <input type="checkbox" name="consent" value="accepted" required />
        <span>I agree that Crystal Accounting may use this information to respond to my enquiry, as described in the <a href="/privacy/">privacy policy</a>.</span>
      </label>
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span>
      </button>
      {status === "error" && (
        <p className="formError" role="alert">
          We couldn&apos;t send your enquiry. Please email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      )}
    </form>
  );
}
