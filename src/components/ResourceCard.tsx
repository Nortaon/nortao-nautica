import { BookOpen } from "lucide-react";

import type { Resource } from "@/config/siteConfig";

export function ResourceCard({ resource }: { resource: Resource }) {
  const hasLink = Boolean(resource.url);

  return (
    <article className="surface-panel flex h-full flex-col rounded-2xl p-7">
      <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
      <h3 className="mt-4 font-display text-xl text-foreground">{resource.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
      <div className="mt-auto pt-6">
        {hasLink ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Acessar
          </a>
        ) : (
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Acesso em breve
          </span>
        )}
      </div>
    </article>
  );
}

export default ResourceCard;
