import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="serviceCard">
      <span className="cardNumber">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>{service.shortTitle}</h3>
        <p>{service.description}</p>
        <Link href={`/services/${service.slug}/`} className="textLink">
          Explore service <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
