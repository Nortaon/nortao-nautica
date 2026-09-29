import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { ComponentType } from "react";

import { JetSkiVisual } from "@/components/nautical/JetSkiVisual";
import type { NauticalVisualProps } from "@/components/nautical/types";
import { WakeTrail } from "@/components/nautical/WakeTrail";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type AnimatedBoatProps = {
  className?: string;
  mode?: "home" | "ambient";
  journeyKey?: string;
  Visual?: ComponentType<NauticalVisualProps>;
};

/** Controls nautical movement independently from the rendered vessel artwork. */
export function AnimatedBoat({
  className,
  mode = "home",
  journeyKey,
  Visual = JetSkiVisual,
}: AnimatedBoatProps) {
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 58, damping: 25, mass: 0.65 });
  const homeX = useTransform(progress, [0, 1], ["-8rem", "calc(100vw - 4rem)"]);
  const homeY = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, -8, 4, -6, 0]);
  const homeRotate = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-1.5, 1.2, -1, 1.4, -0.6]);
  const wakeOpacity = useTransform(progress, [0, 0.08, 1], [0.18, 0.58, 0.72]);
  const isHome = mode === "home";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-x-0 select-none", className)}
    >
      <motion.div
        key={journeyKey}
        className={cn(
          "relative w-20 will-change-transform drop-shadow-[0_8px_18px_color-mix(in_oklab,var(--navy-deep)_70%,transparent)] sm:w-28 lg:w-36",
          !isHome && "ml-auto mr-3 sm:mr-8",
        )}
        style={isHome && !reducedMotion ? { x: homeX, y: homeY, rotate: homeRotate } : {}}
        {...(!isHome && !reducedMotion
          ? {
              initial: { x: 34, y: 5, opacity: 0 },
              animate: { x: 0, y: [0, -3, 0], opacity: 0.52 },
              transition: {
                x: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
                opacity: { duration: 0.45 },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" as const },
              },
            }
          : { initial: false, animate: { opacity: isHome ? 0.68 : 0.38 } })}
      >
        <motion.div
          className="absolute top-[58%] right-[72%] w-20 sm:w-28 lg:w-40"
          style={isHome && !reducedMotion ? { opacity: wakeOpacity } : {}}
        >
          <WakeTrail isStatic={reducedMotion} />
        </motion.div>
        <Visual isStatic={reducedMotion || !isHome} />
      </motion.div>
    </div>
  );
}

export default AnimatedBoat;
