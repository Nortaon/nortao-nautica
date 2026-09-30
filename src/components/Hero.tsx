import type { ReactNode } from "react";
import { motion } from "motion/react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: ReactNode;
  size?: "full" | "compact";
  children?: ReactNode;
  className?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  actions,
  size = "full",
  children,
  className,
}: HeroProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        size === "full" ? "min-h-[78svh] sm:min-h-[82vh]" : "min-h-[46vh]",
        className,
      )}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" aria-hidden="true" />

      <div
        className={cn(
          "mx-auto flex max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8",
          size === "full"
            ? "min-h-[78svh] pt-20 pb-14 sm:min-h-[82vh] sm:pt-24 sm:pb-20"
            : "min-h-[46vh] pt-16 pb-14",
        )}
      >
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1
            className={cn(
              "mt-4 font-display leading-[1.05] text-foreground",
              size === "full"
                ? "text-[2.45rem] sm:text-6xl lg:text-7xl"
                : "text-3xl sm:text-5xl",
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">{actions}</div> : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
