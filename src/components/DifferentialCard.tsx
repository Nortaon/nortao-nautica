import { Sparkles } from "lucide-react";

export function DifferentialCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-border bg-card/60 p-6 transition-colors duration-500 hover:border-primary/40">
      <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
      <h3 className="mt-4 font-display text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}

export default DifferentialCard;
