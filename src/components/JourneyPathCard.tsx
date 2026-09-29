import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

type JourneyPathCardProps = {
  title: string;
  description: string;
  to: "/cursos" | "/servicos" | "/embarcacoes" | "/casas-flutuantes";
  image: string;
  imageAlt: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export function JourneyPathCard({
  title,
  description,
  to,
  image,
  imageAlt,
  icon: Icon,
}: JourneyPathCardProps) {
  return (
    <article className="surface-panel group relative min-h-72 overflow-hidden rounded-xl">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={960}
        height={720}
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--navy-deep)_88%)]" />
      <div className="relative flex min-h-72 flex-col justify-end p-6">
        <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
        <h3 className="font-display text-2xl leading-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{description}</p>
        <Link
          to={to}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-[gap] duration-300 hover:gap-3"
        >
          Ver este caminho
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}