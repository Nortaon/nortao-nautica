import { useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return <div key={pathname}>{children}</div>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="relative isolate"
        initial={{ opacity: 0, x: 14, y: 4 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -10, y: -2 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          aria-hidden="true"
          className="route-wave pointer-events-none absolute inset-x-0 top-0 z-30 h-px origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 1], opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
