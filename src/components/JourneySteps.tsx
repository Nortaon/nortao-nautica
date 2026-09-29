type JourneyStep = {
  title: string;
  description?: string;
};

export function JourneySteps({ steps, compact = false }: { steps: JourneyStep[]; compact?: boolean }) {
  return (
    <ol
      className={
        compact
          ? "grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
          : "grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
      }
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={compact ? "bg-navy-deep p-5" : "border-t border-primary/45 pt-5"}
        >
          <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-display text-xl text-foreground">{step.title}</h3>
          {step.description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}