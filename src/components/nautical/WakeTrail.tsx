import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export function WakeTrail({ isStatic, className }: { isStatic: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 180 46"
      className={cn("h-auto w-full text-primary", className)}
      fill="none"
      role="presentation"
    >
      {[0, 12, 24].map((offset, index) => (
        <motion.path
          key={offset}
          d={`M4 ${8 + offset}c18-9 34 9 52 0s34-9 52 0 34 9 52 0`}
          stroke="currentColor"
          strokeWidth={index === 0 ? 3 : 2}
          strokeLinecap="round"
          opacity={isStatic ? 0.3 : 0.68 - index * 0.16}
          {...(!isStatic
            ? {
                animate: { pathLength: [0.4, 1, 0.4], opacity: [0.18, 0.72, 0.18] },
                transition: {
                  duration: 2.1,
                  repeat: Infinity,
                  delay: index * 0.18,
                  ease: "easeInOut" as const,
                },
              }
            : {})}
        />
      ))}
    </svg>
  );
}

export default WakeTrail;
