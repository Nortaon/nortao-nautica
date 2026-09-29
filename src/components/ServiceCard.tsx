import { Link } from "@tanstack/react-router";
import { ArrowRight, Dot } from "lucide-react";

import type { Service } from "@/config/siteConfig";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="surface-panel group flex h-full flex-col rounded-2xl p-7 transition-colors duration-500 hover:border-primary/40">
      <h3 className="font-display text-xl text-foreground">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-center gap-1">
            <Dot className="h-5 w-5 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to={service.to}
        className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-primary transition-[gap] duration-300 hover:gap-3"
      >
        Saiba mais
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default ServiceCard;
