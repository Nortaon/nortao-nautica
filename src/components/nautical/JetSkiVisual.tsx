import { motion } from "motion/react";

import type { NauticalVisualProps } from "@/components/nautical/types";
import { cn } from "@/lib/utils";

export function JetSkiVisual({ isStatic, className }: NauticalVisualProps) {
  return (
    <motion.svg
      viewBox="0 0 140 72"
      className={cn("h-auto w-full text-primary", className)}
      fill="none"
      role="presentation"
      {...(!isStatic
        ? {
            animate: { y: [0, -2.5, 1, 0], rotate: [0, 1.2, -0.6, 0] },
            transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const },
          }
        : {})}
    >
      <path
        d="M45 25c7-8 17-12 29-11l13 1 10 17-17 2-12-9-15 8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="12" r="7" fill="currentColor" />
      <path
        d="M49 34h58l18 9-12 12c-4 4-9 6-15 6H43c-9 0-17-4-23-10l-5-6 29-3 5-8Z"
        fill="currentColor"
      />
      <path d="M80 34h29l10 8-35 1-4-9Z" fill="currentColor" opacity="0.55" />
      <path
        d="M26 59c19 7 62 8 91 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </motion.svg>
  );
}

export default JetSkiVisual;
