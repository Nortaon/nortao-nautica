import { Link } from "@tanstack/react-router";
import { ArrowRight, Dot } from "lucide-react";

import type { Service } from "@/config/siteConfig";

export function ServiceCard({ service, image }: { service: Service; image?: string }) {
  return (
    <article className="surface-panel group flex h-full flex-col overflow-hidden rounded-xl transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-primary/40">
      {image ? (
        <div className="aspect-[16/9] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={`Solução náutica: ${service.title}`}
            loading="lazy"
            width={960}
            height={540}
            className="h-full w-full object-cover opacity-75 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-90"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
      <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
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
        className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary transition-[gap,color] duration-300 hover:gap-3 hover:text-gold-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        Saiba mais
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
