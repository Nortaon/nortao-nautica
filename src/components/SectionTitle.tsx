import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </Heading>
      <div
        className={cn("mt-5 h-px w-20 hairline-gold", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
