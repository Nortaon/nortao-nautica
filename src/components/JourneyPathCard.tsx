import { Link } from "@tanstack/react-router";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type JourneyPathCardProps = {
  title: string;
  description: string;
  to: "/cursos" | "/servicos" | "/embarcacoes" | "/casas-flutuantes";
  image: string;
  imageAlt: string;
  icon: LucideIcon;
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
    <article className="surface-panel group relative min-h-80 overflow-hidden rounded-xl transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[var(--shadow-gold)]">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={960}
        height={720}
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-60"
      />
      <div className="journey-card-overlay absolute inset-0" />
      <div className="relative flex min-h-80 flex-col justify-end p-6">
        <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 bg-background/70 text-primary backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl leading-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{description}</p>
        <Link
          to={to}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-[gap,color] duration-300 hover:gap-3 hover:text-gold-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Ver este caminho
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
